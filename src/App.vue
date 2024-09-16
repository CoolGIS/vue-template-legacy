<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import Counter from '@/components/Counter.vue'
</script>

<template>
  <Counter />
  <ul
    class="flex gap-2.5 justify-center items-center p-2.5 m-2.5 border border-gray-300 rounded-md bg-white"
  >
    <li>
      <RouterLink to="/">主页</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">关于</RouterLink>
    </li>
  </ul>
  <div>
    <RouterView />
  </div>
  <VueQueryDevtools />
</template>

<style scoped></style>
