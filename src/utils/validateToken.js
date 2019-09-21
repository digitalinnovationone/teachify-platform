import { decoded } from './jwt'

const isValid = token => {
    if (token) {
        const { expires } = decoded(token)
        return !!expires
    }
    return false
}

export { isValid }
