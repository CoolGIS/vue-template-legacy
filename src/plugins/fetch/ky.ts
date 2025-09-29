import ky from 'ky'
import { getToken, isUnprotectedPath } from '@/plugins/fetch/config.ts'

export class APIError extends Error {
  readonly code: number
  constructor(code: number, message: string) {
    super(message)
    this.name = 'APIError'
    this.code = code
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
        // 非标准接口判断是否出错
        /* const res= await response.clone().json()

        if(res.code !== 200) {
          throw new APIError(res.code, res.message)
        } */

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
