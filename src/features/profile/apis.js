import { http } from '@http'

const PREFIX_API = '/users'

const getOneById = payload => http.get(`${PREFIX_API}-getOneById/${payload.id}`)

const apis = {
    getOneById,
}

export { apis }
