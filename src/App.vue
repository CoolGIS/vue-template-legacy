<script setup lang="ts">
import { RouterView } from 'vue-router'
import Counter from '@/components/Counter.vue'
import Zoom from '@/components/_transition/Zoom.vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ElMenu, ElMenuItem } from 'element-plus'
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Counter />
    <ElMenu mode="horizontal" :default-active="$route.path" router>
      <ElMenuItem index="/">主页</ElMenuItem>
      <ElMenuItem index="/about">关于</ElMenuItem>
    </ElMenu>
    <div class="router-view-container">
      <RouterView v-slot="{ Component }">
        <Zoom direction="left" mode="out-in">
          <component :is="Component" />
        </Zoom>
      </RouterView>
    </div>
  </ElConfigProvider>
</template>

<style scoped>
.el-menu {
  justify-content: center;
}

.router-view-container {
  overflow: hidden;
}
</style>
