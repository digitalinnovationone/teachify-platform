import { decoded } from '@utils/jwt'
import { isEmpty } from '@utils/functions'

const TOKEN_KEY = 'TeachifyPlatformToken'

const clear = () => window.localStorage.clear()

const getToken = () => window.localStorage.getItem(TOKEN_KEY)

const getUser = () => {
    const jwt = getToken()

    if (isEmpty(jwt)) {
        return null
    }

    const { payload } = decoded(jwt)
    return payload
}

const isLogged = () => !!getToken()

const logout = () => removeToken()

const removeToken = () => window.localStorage.removeItem(TOKEN_KEY)

const setToken = token => window.localStorage.setItem(TOKEN_KEY, token)

export { clear, getToken, getUser, isLogged, logout, setToken }
