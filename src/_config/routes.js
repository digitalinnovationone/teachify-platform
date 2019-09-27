import React, { Suspense } from 'react'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'

import { history } from './history'
import { store } from './store'

import { combineLinkedRoutes, combineRoutes } from '@utils/routes'

import { routes as authRoutes } from '@features/auth/routes'
import { routes as homeRoutes } from '@features/home/routes'
import { routes as notFoundRoutes } from '@features/notFound/routes'

import PageLoading from '@components/PageLoading'
import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'

const systemRoutes = combineRoutes(
    authRoutes,
    homeRoutes,
    notFoundRoutes, // must be last
)
const routes = combineLinkedRoutes(systemRoutes)

const Routes = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Suspense fallback={<PageLoading />}>
                <Switch>
                    {authRoutes.map((route, index) => (
                        <PublicRoute {...route} exact key={index} />
                    ))}
                    {systemRoutes.map((route, index) => (
                        <PrivateRoute {...route} exact key={index} />
                    ))}
                </Switch>
            </Suspense>
        </ConnectedRouter>
    </Provider>
)

export { routes }
export default Routes
