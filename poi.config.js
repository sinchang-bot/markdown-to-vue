module.exports = {
  entry: 'src/index.ts',
  presets: [
    require('poi-preset-typescript')()
  ],
  extendWebpack(config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .use('markdown-to-vue')
        .loader('markdown-to-vue-loader')
        .options({})
        .end()
  }
}
