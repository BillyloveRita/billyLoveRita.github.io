// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer')({
      browsers: ['iOS >= 7', 'Android >= 4.1'],
      cascade: true,
      remove: true
    }),
    require('postcss-px-to-viewport')({
      viewportWidth: 750,
      viewportHeight: 2334,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore-postcss'],
      minPixelValue: 1,
      mediaQuery: false
    })
  ]
}
