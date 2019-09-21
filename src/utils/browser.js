import QueryString from 'query-string'

import { history } from '@cfg/history'

const getQueryParams = () => QueryString.parse(location.search)
const navigateTo = path => history.push(path)

export { getQueryParams, navigateTo }
