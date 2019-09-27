import React from 'react'

import { Redirect, Route } from 'react-router'

import { routes } from '@routes'

import { isLogged } from '@utils/auth'

const PrivateRoute = props => (isLogged() ? <Redirect to={routes.home} /> : <Route {...props} />)

export default PrivateRoute
