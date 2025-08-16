export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-pxtorem': {
      propList: ['*']
    },
    'postcss-preset-env': {
      features: {
        'nesting-rules': false
      }
    }
  }
}
