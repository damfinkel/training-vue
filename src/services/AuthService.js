import { api } from './api'

export const register = (user) => {
  return api.post('/users', { user })
}

export const login = user => api.post('/users/sessions', user)
