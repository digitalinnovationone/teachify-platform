import React, { lazy } from 'react'

const Info = lazy(() => import('./containers/Info'))

const routes = [{ name: 'profile', path: '/profile' }, { component: () => <Info />, name: 'profileInfo', path: '/profile/:id' }]

export { routes }
