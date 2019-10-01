import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestGetUser = createAction(actionsTypes.PROFILE_REQUEST_GET_USER)
const requestRemoveUser = createAction(actionsTypes.PROFILE_REQUEST_REMOVE_USER)
const requestUpdatePassword = createAction(actionsTypes.PROFILE_REQUEST_UPDATE_PASSWORD)
const requestUpdateUser = createAction(actionsTypes.PROFILE_REQUEST_UPDATE_USER)
const setLoading = createAction(actionsTypes.PROFILE_SET_LOADING)
const setUser = createAction(actionsTypes.PROFILE_SET_USER)

const actions = {
    requestGetUser,
    requestRemoveUser,
    requestUpdatePassword,
    requestUpdateUser,
    setLoading,
    setUser,
}

export { actions }
