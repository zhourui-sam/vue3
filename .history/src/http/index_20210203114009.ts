import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import nprogress from 'nprogress'
import {ElMessage} from 'element-plus'

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
    //请求失败
    nprogress.done()
    let status = err.response && err.response.status
      //状态码
    if (status === 400) {
      message.error('参数错误')
    }
    if (status === 401) {
      message.error('没有权限')
    }
    if (status === 403) {
      message.error('登陆过期')
    }
    if (status === 404) {
      message.error('路径错误')
    }
    if (status === 500) {
      message.error('服务器错误')
    }
    if (status === 503) {
      message.error('服务器在维护')
    }
  return Promise.reject(err)
})