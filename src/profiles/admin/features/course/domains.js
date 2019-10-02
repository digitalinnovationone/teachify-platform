import { getUser } from '@utils/auth'

const addInstructorId = course => ({
    ...course,
    instructor: getUser().id,
})

const categoriesToArray = course => {
    if (course) {
        if (course.categories) {
            course.categories = course.categories.replace(/([\s])/g, '').split(',')
        }
    }
    return course
}

const categoriesToString = course => {
    if (course) {
        if (course.categories) {
            course.categories = course.categories.join(', ')
        }
    }
    return course
}

export { addInstructorId, categoriesToArray, categoriesToString }
