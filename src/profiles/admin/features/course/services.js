import { handleAPI } from '@utils/http'
import { removeKeys } from '@utils/object'

import { apis } from './apis'
import { addInstructorId, categoriesToArray } from './domains'

const FORBIDDEN_KEYS = ['createdAt', 'instructor', 'updatedAt']

const getAll = payload => handleAPI(apis.getAll, payload)
const getOne = payload => handleAPI(apis.getOne, payload)
const remove = payload => handleAPI(apis.remove, payload)
const save = payload => {
    if (payload.id) {
        return handleAPI(apis.update, removeKeys(categoriesToArray(payload), FORBIDDEN_KEYS))
    }
    return handleAPI(apis.save, categoriesToArray(addInstructorId(payload)))
}

const services = {
    getAll,
    getOne,
    remove,
    save,
}

export { services }
