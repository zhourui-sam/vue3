module.exports = {
  //跨域
  devServer: {
      proxy: {
          "/api": {
              ws: false,
              target: "http://157.122.54.189:9093/",
              changeOrigin: true,
              pathRewrite: {
                  "^/api": ""
              }
          }
      }
  }
}