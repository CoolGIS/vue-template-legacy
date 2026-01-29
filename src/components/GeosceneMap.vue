<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useGeosceneStore } from '@/stores/geoscene'

const mapRef = useTemplateRef<HTMLDivElement>('map')
const geosceneStore = useGeosceneStore()
const { init, destroy } = geosceneStore

onMounted(() => {
  if (mapRef.value) {
    init(mapRef.value)
  }
})

onUnmounted(() => {
  destroy()
})
</script>

<template>
  <div ref="map" class="size-full"></div>
</template>
