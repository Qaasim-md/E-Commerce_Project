import axios from 'axios'
import { API_BASE } from './api'
import { clearSession, getToken } from '../utils/auth'

const http = axios.create({
  baseURL: API_BASE,
})

http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearSession()
      window.dispatchEvent(new Event('user-updated'))
    }
    return Promise.reject(error)
  },
)

export default http
