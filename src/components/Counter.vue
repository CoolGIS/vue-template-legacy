<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import Fade from '@/components/_transition/Fade.vue'
import { ElButton } from 'element-plus'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { inc } = counter
</script>

<template>
  <div class="counter-container">
    <ElButton type="primary" size="large" round @click="inc()">
      count is:&nbsp;
      <Fade mode="out-in">
        <span :key="count">{{ count }}</span>
      </Fade>
    </ElButton>
  </div>
</template>

<style scoped>
.counter-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30vh;
}
</style>
