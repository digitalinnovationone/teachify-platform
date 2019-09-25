import React, { lazy } from 'react'

const ConfirmCode = lazy(() => import('./containers/ConfirmCode'))
const ForgotPassword = lazy(() => import('./containers/ForgotPassword'))
const ResetPassword = lazy(() => import('./containers/ResetPassword'))
const SignIn = lazy(() => import('./containers/SignIn'))
const SignUp = lazy(() => import('./containers/SignUp'))

const routes = [
    { component: () => <ConfirmCode />, name: 'confirmCode', path: '/confirm-code' },
    { component: () => <ForgotPassword />, name: 'forgotPassword', path: '/forgot-password' },
    { component: () => <ResetPassword />, name: 'resetPassword', path: '/reset-password' },
    { component: () => <SignIn />, name: 'signIn', path: '/sign-in' },
    { component: () => <SignUp />, name: 'signUp', path: '/sign-up' },
]

export { routes }
