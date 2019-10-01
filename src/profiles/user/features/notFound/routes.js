import React, { lazy } from 'react'

const NotFound = lazy(() => import('./pages/NotFound'))

const routes = [{ component: () => <NotFound />, name: 'notFound' }]

export { routes }
