const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kubaturnik/'
      : '/',
  transpileDependencies: true,
  pages: {
    index: {
      title: 'Кубатурник',
      entry: 'src/main.js'
    }
  }
})
