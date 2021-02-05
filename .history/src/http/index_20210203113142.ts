import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import nprogress from 'nprogress'

const http: AxiosInstance = axios.create({
  baseURL: 'api',
  timeout: 10000
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  nprogress.start()
      //配置token token是鉴权的一种方式
      //在登陆成功之后 会返回当前用户的token 存在本地
      let token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = token
      }
  return config
}, (err: AxiosError) => {
  nprogress.done()
  return Promise.reject(err)
})

http.interceptors.response.use((res: AxiosResponse<any>) => {
  return res.data
}, (err: AxiosError) => {

  return Promise.reject(err)
})