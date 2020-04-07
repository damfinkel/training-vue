import { create } from 'apisauce'

// define the api
export const api = create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1'
})

export const setAccessTokenHeader = (token) => api.setHeader('Authorization', `bearer ${token}`)
