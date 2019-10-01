import React, { lazy } from 'react'

const UpdatePassword = lazy(() => import('./containers/UpdatePassword'))
const Info = lazy(() => import('./containers/Info'))

const routes = [
    { name: 'profile', path: '/profile' },
    { component: () => <UpdatePassword />, name: 'updatePassword', path: '/profile/update-password' },
    { component: () => <Info />, name: 'profileInfo', path: '/profile/:id' }, // must be last
]

export { routes }
