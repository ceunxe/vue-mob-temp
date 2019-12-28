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
      // px转rem
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 40, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
      }
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