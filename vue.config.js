const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本 URL
  publicPath: './',
  // 打包文件夹
  outputDir: 'dist',
  // 静态内容文件夹
  assetsDir: 'static',
  // 删除打包的map文件
  productionSourceMap: false,
  // eslint开启
  lintOnSave: process.env.NODE_ENV === 'development',
  // 别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@page', resolve('src/views'))
      .set('@util', resolve('src/utils'))
      .set('@ass', resolve('src/assets'))
      .set('@com', resolve('src/components'))
      .set('@api', resolve('src/api'))
      .set('@img', resolve('src/assets/images'))
  },
  // 全局变量
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "~@/assets/styles/variable.scss";`
      },
    }
  },
  // 代理
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    // proxy: {
    // 反向代理
    // "/admin": {
    //   target: "http://39.108.151.45:8086/", // 域名
    //   ws: true, // 是否启用websockets
    //   changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //   pathRequiresRewrite: {
    //     "^/admin": "/admin"
    //   }
    // }
  },
}