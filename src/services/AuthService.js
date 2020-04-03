import { api } from './api'

export const register = user => api.post('/users', { user })

export const login = user => api.post('/users/sessions', user)
