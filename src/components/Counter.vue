<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import Fade from '@/components/_transition/Fade.vue'
import { Button } from '@/components/ui/button'

const counter = useCounterStore()
const { count } = storeToRefs(counter)
const { inc } = counter
</script>

<template>
  <div class="center h-[30vh]">
    <Button class="h-10 w-32 rounded-full" @click="inc()">
      count is:
      <Fade mode="out-in">
        <span :key="count">{{ count }}</span>
      </Fade>
    </Button>
  </div>
</template>
