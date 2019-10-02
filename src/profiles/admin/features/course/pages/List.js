import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { routes } from '@routes'

import { navigateTo } from '@utils/browser'

import App from '@containers/App'

import FloatingButton from '@components/FloatingButton'
import Icon from '@components/Icon'
import Padding from '@components/Padding'
import Table from '@components/table'

const List = ({ courses, dispatchGetCourses, loading }) => {
    useEffect(() => {
        dispatchGetCourses()
    }, [dispatchGetCourses])

    const handleAddCourseClick = () => navigateTo(routes.courseForm)

    return (
        <App>
            <Padding all={2}>
                <Table columns={['name']} data={courses} loading={loading} />
                <FloatingButton onClick={handleAddCourseClick}>
                    <Icon icon="fas fa-plus" />
                </FloatingButton>
            </Padding>
        </App>
    )
}

List.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatchGetCourses: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default List
