import { handleAPI } from '@utils/http'

import { apis } from './apis'

const getOneById = payload => handleAPI(apis.getOneById, payload)
const remove = payload => handleAPI(apis.remove, payload)
const update = payload => handleAPI(apis.update, payload)
const updatePassword = payload => handleAPI(apis.updatePassword, payload)

const services = {
    getOneById,
    remove,
    update,
    updatePassword,
}

export { services }
