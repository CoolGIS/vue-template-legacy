import '@tanstack/vue-query'

// 为 mutation 的 meta 字段提供类型定义
declare module '@tanstack/vue-query' {
  interface Register {
    mutationMeta: {
      successMessage?: string
      errorMessage?: string
    }
  }
}
