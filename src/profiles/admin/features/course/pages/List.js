import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import App from '@containers/App'

import Padding from '@components/Padding'
import Table from '@components/table'

const List = ({ courses, dispatchGetCourses, loading }) => {
    useEffect(() => {
        dispatchGetCourses()
    }, [dispatchGetCourses])

    return (
        <App>
            <Padding all={3}>
                <Table columns={['name']} data={courses} loading={loading} />
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
