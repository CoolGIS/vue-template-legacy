import { defineStore } from 'pinia'
import { markRaw, ref, type Raw } from 'vue'
import MapView from '@geoscene/core/views/SceneView'
import Map from '@geoscene/core/Map'

export const useGeosceneStore = defineStore('geoscene', () => {
  const view = ref<Raw<MapView>>()
  const isInit = ref(false)

  const init = async (container: string | HTMLDivElement) => {
    const map = new Map({
      basemap: 'tianditu-vector'
    })
    view.value = markRaw(
      new MapView({
        map,
        container,
        ui: {
          components: []
        }
      })
    )
    await view.value.when()
    isInit.value = true
  }

  return {
    view,
    isInit,
    init
  }
})
