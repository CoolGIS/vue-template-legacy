import { defineStore } from 'pinia'
import { useCounter } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const { count, inc } = useCounter(0)

  return { count, inc }
})
