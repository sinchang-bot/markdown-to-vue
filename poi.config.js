module.exports = {
  entry: 'src/index.ts',
  presets: [
    require('poi-preset-typescript')()
  ],
  extendWebpack(config) {
    config.module.rule('markdown')
      .test(/\.md$/)
      .exclude
        .add(/(node_modules|bower_components)/)
        .end()
      .use('vue')
        .loader('vue-loader')
        .end()
      .use('markdown-to-vue')
        .loader('markdown-to-vue-loader')
        .options({})
  }
}
