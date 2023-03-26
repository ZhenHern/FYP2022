const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/LandingPage/main.js',
      template: 'public/index.html',
      title: 'Landing Page',
      chunks: ['index', 'landingpage']
    },
    login: {
      entry: 'src/pages/LoginPage/main.js',
      template: 'public/index.html',
      title: 'Login Page',
      chunks: ['login']
    },
    products: {
      entry: 'src/pages/ProductPage/main.js',
      template: 'public/index.html',
      title: 'Product Page',
      chunks: ['products']
    },
    userProfile: {
      entry: 'src/pages/UserProfilePage/main.js',
      template: 'public/index.html',
      title: 'User Profile Page',
      chunks: ['userProfile']
    },
    dashboard: {
      entry: 'src/pages/DashboardPage/main.js',
      template: 'public/index.html',
      title: 'Dashboard',
      chunks: ['dashboard']
    },
    editProducts: {
      entry: 'src/pages/EditProductsPage/main.js',
      template: 'public/index.html',
      title: 'Edit Products',
      chunks: ['editProducts']
    },
    orders: {
      entry: 'src/pages/OrdersPage/main.js',
      template: 'public/index.html',
      title: 'Orders',
      chunks: ['orders']
    },
  }
})
