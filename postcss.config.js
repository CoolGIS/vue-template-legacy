export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcss-pxtorem': {
      rootValue: 16,
      minPixelValue: 2,
      propList: ['*']
    },
    'postcss-preset-env': {
      features: {
        'nesting-rules': false
      }
    }
  }
}
