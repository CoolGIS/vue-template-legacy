import '@arcgis/core/assets/esri/themes/light/main.css'
import esriConfig from '@arcgis/core/config'

esriConfig.assetsPath = import.meta.env.BASE_URL + 'arcgis/assets'
esriConfig.fontsUrl = import.meta.env.BASE_URL + 'arcgis/fonts'
