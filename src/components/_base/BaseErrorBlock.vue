<script setup lang="ts">
import { computed } from 'vue'
import { ZodValidationError } from '@/plugins/fetch/ky'
import { HTTPError } from 'ky'

const {
  error,
  onRetry,
  mask = true,
  fullscreen = false
} = defineProps<{
  error: Error | null
  onRetry?: () => void
  mask?: boolean
  fullscreen?: boolean
}>()

const containerClasses = computed(() => [
  'error-block-container',
  {
    'is-fullscreen': fullscreen,
    'has-mask': mask
  }
])

const displayInfo = computed(() => {
  if (!error) {
    return { title: '未知错误', message: '发生了一个未知错误。' }
  }

  if (error instanceof ZodValidationError) {
    return { title: '系统异常', message: '获取的数据格式不正确，请稍后重试。' }
  }

  if (error instanceof HTTPError) {
    switch (error.response.status) {
      case 404:
        return { title: '内容未找到', message: '抱歉，我们没有找到您请求的资源。' }
      case 403:
        return { title: '无权访问', message: '您没有权限执行此操作。' }
      case 500:
      case 502:
      case 503:
        return { title: '服务暂时不可用', message: '服务器暂时无法响应，请稍后重试。' }
      default:
        return { title: '请求失败', message: '您的请求未能成功处理，请稍后重试。' }
    }
  }

  return { title: '网络错误', message: '无法连接到服务器，请检查您的网络连接并重试。' }
})
</script>

<template>
  <div :class="containerClasses">
    <div class="error-block-content">
      <div class="error-block-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
          ></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <h3 class="error-block-title">{{ displayInfo.title }}</h3>
      <p class="error-block-message">{{ displayInfo.message }}</p>
      <button v-if="onRetry" class="error-block-retry-button" @click="onRetry">重试</button>
    </div>
  </div>
</template>

<style scoped>
.error-block-container {
  /* --- 主题变量 --- */
  --eb-mask-bg-color: rgba(255, 255, 255, 0.8);
  --eb-z-index: 998; /* 比Loading低一级 */

  /* --- 定位布局 --- */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--eb-z-index);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

/* --- 行为修饰符 --- */
.error-block-container.is-fullscreen {
  position: fixed;
}
.error-block-container.has-mask {
  background-color: var(--eb-mask-bg-color);
}

.error-block-content {
  --eb-content-bg-color: #ffffff;
  --eb-border-color: #e0e0e0;
  --eb-text-color-title: #333333;
  --eb-text-color-message: #666666;
  --eb-icon-color: #888888;
  --eb-button-bg-color: #333333;
  --eb-button-text-color: #ffffff;
  --eb-button-hover-bg-color: #555555;
  --eb-font-family: inherit;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  border: 1px solid var(--eb-border-color);
  border-radius: 8px;
  background-color: var(--eb-content-bg-color);
  width: 90%;
  max-width: 400px;
  box-sizing: border-box;
  font-family: var(--eb-font-family);
}

.error-block-icon {
  color: var(--eb-icon-color);
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
}
.error-block-icon svg {
  width: 100%;
  height: 100%;
}
.error-block-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--eb-text-color-title);
  margin: 0 0 0.5rem 0;
}
.error-block-message {
  font-size: 0.875rem;
  color: var(--eb-text-color-message);
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
}
.error-block-retry-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: var(--eb-button-bg-color);
  color: var(--eb-button-text-color);
  transition: background-color 0.2s ease-in-out;
  font-family: var(--eb-font-family);
}
.error-block-retry-button:hover {
  background-color: var(--eb-button-hover-bg-color);
}
</style>
