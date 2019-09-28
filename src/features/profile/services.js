import { handleAPI } from '@utils/http'

import { apis } from './apis'

const getOneById = payload => handleAPI(apis.getOneById, payload)

const services = {
    getOneById,
}

export { services }
