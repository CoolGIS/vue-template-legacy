import { QueryCache, QueryClient } from '@tanstack/vue-query'

const queryCache = new QueryCache({
  onSuccess() {
    //全局成功处理
  },
  onError(error) {
    // 全局错误处理
    console.log('error', error.message)
  }
})

const queryClient = new QueryClient({
  queryCache
})

export { queryClient }
