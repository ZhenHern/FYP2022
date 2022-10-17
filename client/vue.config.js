const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/LandingPage/main.js',
      template: 'public/index.html',
      title: 'Landing Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index', 'landingpage']
    },
    login: {
      entry: 'src/pages/LoginPage/main.js',
      template: 'public/index.html',
      title: 'Login Page',
      chunks: [ 'login' ]
    }
  }
})
