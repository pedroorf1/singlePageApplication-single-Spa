const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
    chainWebpack: config => {
      config.externals(['vue', 'vue-router']);
    },
  },
})
