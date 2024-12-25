<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import Counter from '@/components/Counter.vue'
import Zoom from '@/components/_transition/Zoom.vue'
</script>

<template>
  <Counter />
  <ul class="m-2.5 center gap-2.5 border border-gray-300 rounded-md bg-white p-2.5">
    <li>
      <RouterLink to="/">主页</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">关于</RouterLink>
    </li>
  </ul>
  <div class="overflow-hidden">
    <RouterView v-slot="{ Component }">
      <Zoom direction="left" mode="out-in">
        <Component :is="Component" />
      </Zoom>
    </RouterView>
  </div>
  <VueQueryDevtools />
</template>

<style scoped></style>
