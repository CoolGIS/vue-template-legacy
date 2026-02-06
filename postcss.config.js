export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16,
      minPixelValue: 2,
      propList: ['*']
    }
  }
}
