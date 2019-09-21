import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestSignInAction = createAction(actionsTypes.AUTH_REQUEST_SIGN_IN)
const signInAction = createAction(actionsTypes.AUTH_SIGN_IN)

const actions = {
    requestSignInAction,
    signInAction,
}

export { actions }
