import { actionsTypes } from './constants'

import { createAction } from '@utils/actions'

const removeCourse = createAction(actionsTypes.COURSE_REMOVE_COURSE)
const requestGetCourse = createAction(actionsTypes.COURSE_REQUEST_GET_COURSE)
const requestGetCourses = createAction(actionsTypes.COURSE_REQUEST_GET_COURSES)
const requestRemoveCourse = createAction(actionsTypes.COURSE_REQUEST_REMOVE_COURSE)
const requestSaveCourse = createAction(actionsTypes.COURSE_REQUEST_SAVE_COURSE)
const setCourse = createAction(actionsTypes.COURSE_SET_COURSE)
const setCourses = createAction(actionsTypes.COURSE_SET_COURSES)
const setLoading = createAction(actionsTypes.COURSE_SET_LOADING)

const actions = {
    removeCourse,
    requestGetCourse,
    requestGetCourses,
    requestRemoveCourse,
    requestSaveCourse,
    setCourse,
    setCourses,
    setLoading,
}

export { actions }
