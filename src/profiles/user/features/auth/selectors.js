import { createSelector } from 'reselect'

const REDUCER_NAME = 'authReducers'

const getLoading = createSelector(
    state => state[REDUCER_NAME].loading,
    loading => loading,
)

const selectors = {
    getLoading,
}

export { selectors }
