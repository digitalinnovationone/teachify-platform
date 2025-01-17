import { columns } from '@constants/columns'

import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { alerts } from '@utils/alert'
import { navigateTo } from '@utils/browser'

import App from '@containers/App'

import FloatingButton from '@components/FloatingButton'
import Icon from '@components/Icon'
import Padding from '@components/Padding'
import Table from '@components/table'

const List = ({ courses, dispatchGetCourses, dispatchRemoveCourse, loading }) => {
    useEffect(() => {
        dispatchGetCourses()
    }, [dispatchGetCourses])

    const handleAddCourseClick = () => navigateTo(routes.courseForm)

    const handleColumnRender = (value, column) => {
        if (column === 'published') {
            if (value) {
                return <Icon icon="fas fa-check" />
            }
            return <Icon icon="fas fa-times" />
        }
        return value
    }

    const handleEditCourse = course => navigateTo(`${routes.courseForm}/${course.id}`)

    const handleRemoveCourse = course =>
        alerts
            .confirm({
                text: i18n.t('texts.removeCourse'),
                title: i18n.t('titles.removeCourse'),
            })
            .then(result => {
                if (result && result.value) {
                    dispatchRemoveCourse(course)
                }
            })

    return (
        <App>
            <Padding all={2}>
                <Table
                    columns={['name', 'published', columns.actions]}
                    data={courses}
                    loading={loading}
                    onColumnRender={handleColumnRender}
                    onEdit={handleEditCourse}
                    onRemove={handleRemoveCourse}
                />
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
    dispatchRemoveCourse: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default List
