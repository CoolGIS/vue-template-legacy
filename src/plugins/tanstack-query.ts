import { QueryCache, MutationCache, QueryClient } from '@tanstack/vue-query'

const queryCache = new QueryCache({
  onSuccess() {
    //全局成功处理
  },
  onError(error) {
    // 全局错误处理
    console.log('query error:', error.message)
  }
})

const mutationCache = new MutationCache({
  onSuccess(data, variables, context, mutation) {
    // 全局成功处理
    const message =
      typeof mutation.options.meta?.successMessage === 'string'
        ? mutation.options.meta.successMessage
        : '操作成功！'
    console.log('mutation success:', message)
  },
  onError(error, variables, context, mutation) {
    // 全局错误处理
    const message =
      typeof mutation.options.meta?.errorMessage === 'string'
        ? mutation.options.meta.errorMessage
        : '操作失败，请稍后重试'
    console.log('mutation error:', message)
  }
})

const queryClient = new QueryClient({
  queryCache,
  mutationCache
})

const vueQueryOption = {
  queryClient,
  enableDevtoolsV6Plugin: true
}

export default vueQueryOption
