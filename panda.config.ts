import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  html: {
    fontSize: 'calc(100vw / 120)'
  }
})

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {}
  },

  // Global styles
  globalCss,

  // Generates JSX utilities with options of React, Preact, Qwik, Solid, Vue
  jsxFramework: 'vue',

  importMap: '@styled',

  // The output directory for your css system
  outdir: 'styled-system'
})
