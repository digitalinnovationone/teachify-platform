import React, { lazy } from 'react'

const List = lazy(() => import('./containers/List'))

const routes = [{ component: () => <List />, name: 'courseList', path: '/admin/courses' }]

export { routes }
