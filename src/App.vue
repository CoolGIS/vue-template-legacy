<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Counter from '@/components/Counter.vue'
import Zoom from '@/components/_transition/Zoom.vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <Counter />
  <nav class="center border-border bg-card m-2.5 h-12 gap-2.5 rounded-md border p-2.5">
    <Button variant="ghost" as-child>
      <RouterLink to="/">主页</RouterLink>
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" as-child>
      <RouterLink to="/about">关于</RouterLink>
    </Button>
  </nav>
  <div class="overflow-hidden">
    <RouterView v-slot="{ Component }">
      <Zoom direction="left" mode="out-in">
        <component :is="Component" />
      </Zoom>
    </RouterView>
  </div>
</template>
