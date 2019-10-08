import React from 'react'
import { Redirect, Route } from 'react-router'

import { routes } from '@routes'

import { isLogged } from '@utils/auth'

const PrivateRoute = props => (isLogged() ? <Route {...props} /> : <Redirect to={routes.signIn} />)

export default PrivateRoute
