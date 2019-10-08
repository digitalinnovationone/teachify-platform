import { isEmpty } from '@utils/functions'
import { decoded } from '@utils/jwt'

const TEACHIFY_ADMIN = '@teachify.com.br'
const TOKEN_KEY = 'TeachifyPlatformToken'

const getToken = () => window.localStorage.getItem(TOKEN_KEY)

const getUser = () => {
    const jwt = getToken()

    if (isEmpty(jwt)) {
        return null
    }

    const { payload } = decoded(jwt)
    return payload
}

const isAdmin = () => {
    const user = getUser()
    if (user) {
        return user.email.endsWith(TEACHIFY_ADMIN)
    }
    return false
}

const isLogged = () => !!getToken()
const removeToken = () => window.localStorage.removeItem(TOKEN_KEY)
const setToken = token => window.localStorage.setItem(TOKEN_KEY, token)
const login = token => setToken(token)
const logout = () => removeToken()

export { getToken, getUser, isAdmin, isLogged, login, logout }
