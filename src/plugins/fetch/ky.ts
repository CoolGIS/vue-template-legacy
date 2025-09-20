import ky from 'ky'
import { getToken, isUnprotectedPath } from '@/plugins/fetch/config.ts'

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
