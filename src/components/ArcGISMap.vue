<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useArcGISStore } from '@/stores/arcgis'

const mapRef = useTemplateRef<HTMLDivElement>('map')
const arcgisStore = useArcGISStore()
const { init, destroy } = arcgisStore

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
  <div ref="map" class="map-container"></div>
</template>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
}
</style>
