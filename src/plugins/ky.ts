import ky from 'ky'

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  retry: 0,
  hooks: {
    beforeRequest: [
      (request) => {
        // 添加认证头或其他自定义逻辑
        request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
      }
    ],
    afterResponse: [
      (_request, _options, response) => {
        // 处理响应,例如刷新token
        if (response.status === 401) {
          // 处理未授权情况
        }
      }
    ]
  }
})

export { api }
