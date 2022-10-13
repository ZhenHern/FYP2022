const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'landingpage': {
      entry: 'src/pages/LandingPage/main.js',
      template: 'public/index.html',
      title: 'Landing Page',
      chunks: ['chunk-vendors', 'chunk-common', 'landingpage']
    }
  }
})
