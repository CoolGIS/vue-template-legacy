import { useGeosceneStore } from '@/stores/geoscene'
import { defineComponent, onMounted, onUnmounted, useTemplateRef } from 'vue'

export default defineComponent(
  () => {
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

    return () => <div ref="map" class="size-full"></div>
  },
  {
    name: 'GeosceneMap'
  }
)
