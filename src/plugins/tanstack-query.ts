import { QueryCache, MutationCache, QueryClient } from '@tanstack/vue-query'
import { HTTPError } from 'ky'

const queryCache = new QueryCache({
  onSuccess() {
    // 全局成功处理
  },
  onError(error) {
    // 全局错误处理
    console.error('[Query Error]', error)
    // 在生产环境可以上报给Sentry等

    if (error instanceof HTTPError && error.response.status === 401) {
      // 处理401未授权情况
    }
  }
})

const mutationCache = new MutationCache({
  onSuccess(data, variables, context, mutation) {
    // 全局成功处理
    const message = mutation.options.meta?.successMessage ?? '操作成功！'
    console.log('[Mutation Success]', message)
    // 触发一个全局的 toast/notification
  },
  onError(error, variables, context, mutation) {
    // 全局错误处理
    console.error('[Mutation Error]', error)
    // 在生产环境可以上报给Sentry等

    if (error instanceof HTTPError && error.response.status === 401) {
      // 处理401未授权情况
      return
    }

    // 从 meta 获取自定义消息，否则使用通用消息
    const message = mutation.options.meta?.errorMessage ?? '操作失败，请稍后重试'
    console.error('[Mutation Error]', message)
    // 触发一个全局的 toast/notification
  }
})

const queryClient = new QueryClient({
  queryCache,
  mutationCache,
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})

const vueQueryOption = {
  queryClient,
  enableDevtoolsV6Plugin: true
}

export default vueQueryOption
