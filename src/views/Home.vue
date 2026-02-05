<script setup lang="ts">
import ArcGISMap from '@/components/ArcGISMap.vue'
</script>

<template>
  <div class="home-container">
    <ArcGISMap />
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>
