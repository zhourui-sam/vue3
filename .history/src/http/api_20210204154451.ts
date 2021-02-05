import http from './index'

export default {
  login({username, password}: {username: string, password: string}) {
    
  },
  slideshow(){//获取轮播图数据
    return http.get('/scenics/banners')
  }
}