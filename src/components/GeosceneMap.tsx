import { useGeosceneStore } from '@/stores/geoscene'
import { storeToRefs } from 'pinia'
import { defineComponent, onMounted, onUnmounted, useTemplateRef } from 'vue'

export default defineComponent(
  () => {
    const mapRef = useTemplateRef<HTMLDivElement>('map')
    const geosceneStore = useGeosceneStore()
    const { view } = storeToRefs(geosceneStore)
    const { init } = geosceneStore

    onMounted(async () => {
      if (mapRef.value) {
        init(mapRef.value)
      }
    })

    onUnmounted(() => {
      view.value?.destroy()
    })

    return () => <div ref="map" class="size-full"></div>
  },
  {
    name: 'GeosceneMap'
  }
)
