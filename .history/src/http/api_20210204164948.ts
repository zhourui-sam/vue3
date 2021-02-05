import http from './index'

export default {
  login({username, password}: {username: string, password: string}) {//登录请求
    return http.post(`/accounts/login`,{
      username,
      password
    })
  },
  slideshow() {//获取轮播图数据
    return http.get('/scenics/banners')
  }
}