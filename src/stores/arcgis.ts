import { defineStore } from 'pinia'
import { markRaw, ref, type Raw } from 'vue'
import MapView from '@arcgis/core/views/MapView'
import Map from '@arcgis/core/Map'

export const useArcGISStore = defineStore('arcgis', () => {
  const view = ref<Raw<MapView>>()
  const isInit = ref(false)

  const init = async (container: string | HTMLDivElement) => {
    const map = new Map({
      basemap: 'osm'
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

  const destroy = () => {
    view.value?.destroy()
  }

  return {
    view,
    isInit,
    init,
    destroy
  }
})
