import { times } from '@constants/times'
import { CODES } from '@constants/HTTP'

import axios from 'axios'

import { config } from '@config'

import { routes as authRoutes } from '@features/auth/routes'

import { getToken, isLogged } from '@utils/auth'
import { navigateTo } from '@utils/browser'

const API_URL = config.api.url

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: times.THIRDSECONDS,
})

http.interceptors.request.use(request => {
    if (isLogged()) {
        request.headers.Authorization = getToken()
    }
    return request
})

http.interceptors.response.use(null, error => {
    if (error.response) {
        const {
            response: { data, status },
        } = error
        if (isLogged() && status === CODES.UNAUTHORIZED) {
            navigateTo(authRoutes[0].path)
        }
        return Promise.reject(data && data.result)
    }
    return Promise.reject(error.message)
})

export { http }
