import { ConnectedRouter } from 'connected-react-router'
import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router'

import { isAdmin } from '@utils/auth'
import { combineLinkedRoutes, combineRoutes } from '@utils/routes'

import { routes as courseRoutes } from '@profiles/admin/features/course/routes'
import { routes as authRoutes } from '@profiles/user/features/auth/routes'
import { routes as homeRoutes } from '@profiles/user/features/home/routes'
import { routes as notFoundRoutes } from '@profiles/user/features/notFound/routes'
import { routes as profileRoutes } from '@profiles/user/features/profile/routes'

import PageLoading from '@components/PageLoading'
import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'

import { history } from './history'
import { store } from './store'

const allRoutes = [authRoutes, homeRoutes, profileRoutes]

if (isAdmin()) {
    allRoutes.push(courseRoutes)
}

allRoutes.push(notFoundRoutes)

const systemRoutes = combineRoutes(...allRoutes)
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
