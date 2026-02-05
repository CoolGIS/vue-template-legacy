<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Counter from '@/components/Counter.vue'
import Zoom from '@/components/_transition/Zoom.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Counter />
    <ul class="center m-2.5 gap-2.5 rounded-md border border-gray-300 bg-white p-2.5">
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
          <component :is="Component" />
        </Zoom>
      </RouterView>
    </div>
  </ElConfigProvider>
</template>
