export default {
  plugins: {
    '@pandacss/dev/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16,
      minPixelValue: 2,
      propList: ['*']
    },
    'postcss-preset-env': {}
  }
}
