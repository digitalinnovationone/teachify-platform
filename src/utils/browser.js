import QueryString from 'query-string'

import { history } from '@cfg/history'

const THEME_KEY = 'TeachifyTheme'
const THEMES = {
    dark: 'dark',
    light: 'light',
}
const THEMES_TOGGLE = {
    dark: THEMES.light,
    light: THEMES.dark,
}

const getQueryParams = () => QueryString.parse(location.search)
const getTheme = () => localStorage.getItem(THEME_KEY)
const navigateTo = path => history.push(path)
const setTheme = theme => localStorage.setItem(THEME_KEY, theme)
const toggleTheme = () => THEMES_TOGGLE[getTheme()]

export { THEMES, getQueryParams, getTheme, navigateTo, setTheme, toggleTheme }
