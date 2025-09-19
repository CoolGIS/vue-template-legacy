import ky from 'ky'
import { getToken, isUnprotectedPath } from '@/plugins/fetch/config.ts'
import { ZodType, ZodError } from 'zod'

// 扩展 ky 的类型，识别自定义 context
declare module 'ky' {
  interface Options {
    zodSchema?: ZodType
  }
  interface NormalizedOptions {
    zodSchema?: ZodType
  }
}

// 定义自定义验证错误
export class ZodValidationError extends Error {
  constructor(message: string, options?: { cause: Error }) {
    super(message, options)
    this.name = 'ZodValidationError'
  }
}

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  retry: 0,
  hooks: {
    beforeRequest: [
      (request) => {
        const url = new URL(request.url)
        const schemaPath = url.pathname
        if (!isUnprotectedPath(schemaPath)) {
          // 添加认证头或其他自定义逻辑
          request.headers.set('Authorization', `Bearer ${getToken()}`)
        }
      }
    ],
    afterResponse: [
      async (_request, options, response) => {
        // 数据校验
        const schema = options.zodSchema

        if (!schema) {
          return response
        }

        const clonedResponse = response.clone()
        try {
          const data = await clonedResponse.json()
          schema.parse(data)
          return response
        } catch (error) {
          if (error instanceof ZodError) {
            throw new ZodValidationError('数据校验失败', { cause: error })
          }
          // 重新抛出其他错误（如 JSON 解析失败）
          throw error
        }
      }
    ]
  }
})

export { api }
