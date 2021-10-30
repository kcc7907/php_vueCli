module.exports = {
  //if got sub-path
  publicPath: 
    process.env.NODE_ENV === 'production'
      ? `/${process.env.VUE_APP_SUB_PATH}`
      : '/'
  ,

  //if using xampp 
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost',
        changeOrigin: true
      }
    }
  }
}