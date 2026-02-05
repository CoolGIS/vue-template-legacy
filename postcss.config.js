export default {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      minPixelValue: 2,
      propList: ['*']
    },
    'postcss-preset-env': {}
  }
}
