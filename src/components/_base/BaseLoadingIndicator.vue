<script setup lang="ts">
import { computed } from 'vue'

const { mask = true, fullscreen = false } = defineProps<{
  mask?: boolean
  fullscreen?: boolean
}>()

const containerClasses = computed(() => [
  'loading-indicator-container',
  {
    'is-fullscreen': fullscreen,
    'has-mask': mask
  }
])
</script>

<template>
  <div :class="containerClasses">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
.loading-indicator-container {
  /* --- 主题变量 --- */
  --li-spinner-size: 2.5em;
  --li-spinner-color: #333;
  --li-spinner-track-color: #e0e0e0;
  --li-spinner-border-width: 0.25em;
  --li-mask-bg-color: rgba(255, 255, 255, 0.7);
  --li-z-index: 999;

  /* --- 定位布局 --- */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--li-z-index);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* --- 行为修饰符 --- */
.loading-indicator-container.is-fullscreen {
  position: fixed;
}
.loading-indicator-container.has-mask {
  background-color: var(--li-mask-bg-color);
}

.spinner {
  width: var(--li-spinner-size);
  height: var(--li-spinner-size);
  border-radius: 50%;
  border: var(--li-spinner-border-width) solid var(--li-spinner-track-color);
  border-top-color: var(--li-spinner-color);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
