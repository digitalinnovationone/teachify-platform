import { handleAPI } from '@utils/http'

import { apis } from './apis'

const getAll = payload => handleAPI(apis.getAll, payload)

const services = {
    getAll,
}

export { services }
