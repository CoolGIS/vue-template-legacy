<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { inc } = counter
</script>

<template>
  <div class="h-30vh center">
    <button class="h-10 w-32 rounded-full bg-blue-500 text-white" @click="inc()">
      count is: {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
