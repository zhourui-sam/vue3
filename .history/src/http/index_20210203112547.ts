import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import nprogress from 'nprogress'

const http: AxiosInstance = axios.create({
  baseURL: 'api',
  timeout: 10000
})

http.interceptors.request.use((config: AxiosRequestConfig) => {
  
  return config

})