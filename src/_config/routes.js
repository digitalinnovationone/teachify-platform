import React, { Suspense } from 'react'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'

import { history } from './history'
import { store } from './store'

import { combineLinkedRoutes, combineRoutes } from '@utils/routes'
import { isLogged } from '@utils/auth'

import { routes as authRoutes } from '@features/auth/routes'
import { routes as notFoundRoutes } from '@features/notFound/routes'

import PageLoading from '@components/PageLoading'
import PrivateRoute from '@components/PrivateRoute'

const systemRoutes = combineRoutes(
    notFoundRoutes, // must be last
)
const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Suspense fallback={<PageLoading />}>
                <Switch>
                    {authRoutes.map((route, index) => (
                        <Route {...route} exact key={index} />
                    ))}
                    <Route
                        path="*"
                        render={() => {
                            if (isLogged()) {
                                return (
                                    <Switch>
                                        {systemRoutes.map((route, index) => (
                                            <PrivateRoute {...route} exact key={index} />
                                        ))}
                                    </Switch>
                                )
                            }
                            return <Redirect to={authRoutes[0].path} />
                        }}
                    />
                </Switch>
            </Suspense>
        </ConnectedRouter>
    </Provider>
)

export { routes }
export default Routes
