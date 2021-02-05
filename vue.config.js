module.exports = {
    lintOnSave: false,
    //跨域
    devServer: {
        proxy: {
            "/api": {
                ws: false,
                target: "http://157.122.54.189:9095/",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}