import React, { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))

const routes = [{ component: () => <Home />, name: 'home', path: '/' }]

export { routes }
