import { createSelector } from 'reselect'

const REDUCER_NAME = 'profileReducers'

const getLoading = createSelector(
    state => state[REDUCER_NAME].loading,
    loading => loading,
)

const getUser = createSelector(
    state => state[REDUCER_NAME].user,
    user => user,
)

const selectors = {
    getLoading,
    getUser,
}

export { selectors }
