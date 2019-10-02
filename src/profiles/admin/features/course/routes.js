import React, { lazy } from 'react'

const Form = lazy(() => import('./containers/Form'))
const List = lazy(() => import('./containers/List'))

const routes = [
    { component: () => <List />, name: 'courseList', path: '/admin/courses' },
    { component: () => <Form />, name: 'courseForm', path: '/admin/courses/form' },
]

export { routes }
