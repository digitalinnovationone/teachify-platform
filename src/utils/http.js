import { CODES } from '@constants/HTTP'

const handleError = error => console.error(error)
const handleSuccess = ({ data }) => data
const responseWas = (responseCode, httpCode) => responseCode === httpCode
const responseWasOK = responseCode => responseWas(responseCode, CODES.OK)

const handleAPI = (api, payload) =>
    api(payload)
        .then(({ data, status }) => {
            if (responseWasOK(status)) {
                return data && data.result
            }
            return null
        })
        .catch(error => {
            handleError(error)
            throw new Error(error)
        })

export { handleAPI, handleError, handleSuccess, responseWasOK }
