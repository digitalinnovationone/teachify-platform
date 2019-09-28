import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestGetUser = createAction(actionsTypes.PROFILE_REQUEST_GET_USER)
const setLoading = createAction(actionsTypes.PROFILE_SET_LOADING)
const setUser = createAction(actionsTypes.PROFILE_SET_USER)

const actions = {
    requestGetUser,
    setLoading,
    setUser,
}

export { actions }
