import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import nprogress from 'nprogress'

const http: AxiosInstance = axios.create({
  baseURL: 'api',
  timeout: 10000
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  nprogress.start()
  //token
  return config
}, (err: AxiosError) => {
  nprogress.done()
  return Promise.reject(err)
})

http.interceptors.response.use((res: AxiosResponse<any>) => {
  return res.data
}, (err: AxiosError) => {
  
})