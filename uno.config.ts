import {
  defineConfig,
  presetWind3,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then((i) => i.default),
        gis: () => import('@iconify-json/gis/icons.json').then((i) => i.default)
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: [
    {
      hstack: 'flex items-center',
      vstack: 'flex flex-col items-center',
      center: 'flex justify-center items-center'
    },
    [/^size-(.*)$/, ([, n]) => `w-${n} h-${n}`]
  ]
})
