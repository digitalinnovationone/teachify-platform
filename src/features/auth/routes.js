import React, { lazy } from 'react'

const SignIn = lazy(() => import('./containers/SignIn'))

const routes = [{ component: () => <SignIn />, name: 'signIn', path: '/sign-in' }]

export { routes }
