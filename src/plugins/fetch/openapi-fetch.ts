import createClient, { type Middleware } from 'openapi-fetch'
import type { paths } from '@/apis/type/example'
import { getToken, isUnprotectedPath } from '@/plugins/fetch/config.ts'

const middleware: Middleware = {
  async onRequest({ request, schemaPath }) {
    if (isUnprotectedPath(schemaPath)) {
      return undefined
    }
    // 添加认证头或其他自定义逻辑
    request.headers.set('Authorization', `Bearer ${getToken()}`)
    return request
  },
  async onResponse({ response }) {
    if (!response.ok) {
      // 处理响应,例如刷新token
      if (response.status === 401) {
        // 处理未授权情况
      }
      throw response
    }
    return response
  },
  async onError({ error }) {
    // 错误记录
    console.log(error)
    return
  }
}

const client = createClient<paths>({ baseUrl: import.meta.env.VITE_API_BASE_URL })

client.use(middleware)

export { client }
