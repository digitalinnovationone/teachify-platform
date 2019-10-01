import { http } from '@http'

const PREFIX_API = '/courses'

const getAll = () => http.get(`${PREFIX_API}-getAll`)

const apis = {
    getAll,
}

export { apis }
