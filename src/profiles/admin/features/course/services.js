import { getUser } from '@utils/auth'
import { handleAPI } from '@utils/http'

import { apis } from './apis'

const getAll = payload => handleAPI(apis.getAll, payload)
const save = payload =>
    handleAPI(apis.save, {
        ...payload,
        categories: payload.categories.replace(/([\s])/g, '').split(','),
        instructor: getUser().id,
    })

const services = {
    getAll,
    save,
}

export { services }
