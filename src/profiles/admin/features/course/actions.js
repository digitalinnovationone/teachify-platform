import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const requestGetCourses = createAction(actionsTypes.COURSE_REQUEST_GET_COURSES)
const requestSaveCourse = createAction(actionsTypes.COURSE_REQUEST_SAVE_COURSE)
const setCourses = createAction(actionsTypes.COURSE_SET_COURSES)
const setLoading = createAction(actionsTypes.COURSE_SET_LOADING)

const actions = {
    requestGetCourses,
    requestSaveCourse,
    setCourses,
    setLoading,
}

export { actions }
