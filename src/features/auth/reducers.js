import { handleActions } from '@utils/actions'

import { actions } from './actions'
import { store } from './store'

const reducers = handleActions(
    {
        [actions.loading]: (state, { payload }) => {
            state.loading = payload
        },
    },
    store,
)

export { reducers }
