import { http } from '@http'

const PREFIX_API = '/courses'

const getAll = () => http.get(`${PREFIX_API}-getAll`)
const save = payload => http.post(`${PREFIX_API}-create`, payload)

const apis = {
    getAll,
    save,
}

export { apis }
