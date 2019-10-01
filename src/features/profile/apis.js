import { http } from '@http'

import { removeKeys } from '@utils/object'

const PREFIX_API = '/users'

const FORBIDDEN_KEYS = ['createdAt', 'email', 'updatedAt']

const getOneById = payload => http.get(`${PREFIX_API}-getOneById/${payload.id}`)
const remove = payload => http.delete(`${PREFIX_API}-remove/${payload.id}`)
const update = payload => http.put(`${PREFIX_API}-update`, removeKeys(payload, FORBIDDEN_KEYS))
const updatePassword = payload => http.patch(`${PREFIX_API}-updatePassword`, payload)

const apis = {
    getOneById,
    remove,
    update,
    updatePassword,
}

export { apis }
