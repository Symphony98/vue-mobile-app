module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {

    //新增的内容
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5 //初始基数
      })
    //新增结束
  }
};
