const path = require('path')

module.exports = {
  baseUrl: '/projects/world-quiz/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
    }
  }
}
