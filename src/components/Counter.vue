<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const { count } = storeToRefs(useCounterStore())
</script>

<template>
  <div class="flex justify-center items-center h-[30vh]">
    <button class="w-32 h-10 bg-blue-500 rounded-full text-white" @click="() => count++">
      count is: {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
