import ky from 'ky'
import { getToken, isUnprotectedPath } from '@/plugins/fetch/config.ts'
import { ZodType } from 'zod'

// 扩展 ky 的类型，识别自定义 context
declare module 'ky' {
  interface Options {
    zodSchema?: ZodType
  }
  interface NormalizedOptions {
    zodSchema?: ZodType
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
      async (_request, { zodSchema }, response) => {
        // 数据校验
        if (zodSchema) {
          const data = await response.clone().json()
          zodSchema.parse(data)
        }
        return response
      }
    ]
  }
})

export { api }
