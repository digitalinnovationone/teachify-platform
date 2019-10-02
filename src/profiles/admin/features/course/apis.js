import { http } from '@http'

const PREFIX_API = '/courses'

const getAll = () => http.get(`${PREFIX_API}-getAll`)
const getOne = payload => http.get(`${PREFIX_API}-getOneById/${payload.id}`)
const remove = payload => http.delete(`${PREFIX_API}-remove/${payload.id}`)
const save = payload => http.post(`${PREFIX_API}-create`, payload)
const update = payload => http.put(`${PREFIX_API}-update`, payload)

const apis = {
    getAll,
    getOne,
    remove,
    save,
    update,
}

export { apis }
