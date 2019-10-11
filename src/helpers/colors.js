import { darken } from 'polished'

const background = '#f5f6fa'
const backgroundAlt = '#fdfdfd'
const backgroundAltHover = darken(0.1, backgroundAlt)
const error = '#ff8080'
const errorHover = darken(0.1, error)
const errorLight = '#ffe6e6'
const primary = '#0099ff'
const primaryHover = darken(0.1, primary)
const primaryLight = '#e6f5ff'
const success = '#00cc99'
const successHover = darken(0.1, success)
const text = '#454545'
const textAlt = '#fdfdfd'
const textDark = '#333333'
const textError = '#ff4d4d'
const textLight = '#b3b3b3'
const warning = '#ffcc00'
const warningHover = darken(0.1, warning)

const colors = {
    background,
    backgroundAlt,
    backgroundAltHover,
    error,
    errorHover,
    errorLight,
    primary,
    primaryHover,
    primaryLight,
    success,
    successHover,
    text,
    textAlt,
    textDark,
    textError,
    textLight,
    warning,
    warningHover,
}

export { colors }
