// const {getEntry} =  require('./src/utils/getEntry')

module.exports = {
    // 部署应用包时的基本 URL
    publicPath: '/',
    // 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)
    // pages: getEntry('src/modules/**?/*.js'),
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: process.env.VUE_APP_TITLE,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
    },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    // 设置为 true 或 'warning' 时，eslint-loader 会将 lint 错误输出为编译警告
    lintOnSave: process.env.NODE_ENV === 'development',
    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    runtimeCompiler: true,
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      https: false,
      open: true
    }
  }