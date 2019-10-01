import { createSelector } from 'reselect'

const REDUCER_NAME = 'courseReducers'

const getLoading = createSelector(
    state => state[REDUCER_NAME].loading,
    loading => loading,
)

const getCourses = createSelector(
    state => state[REDUCER_NAME].courses,
    courses => courses,
)

const selectors = {
    getCourses,
    getLoading,
}

export { selectors }
