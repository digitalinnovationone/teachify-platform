import { colors } from './colors'

const borders = {
    default: '1px solid #dcdcdc',
    primaryLink: `2px solid ${colors.primary}`,
}

const bordersDark = {
    ...borders,
    default: '1px solid #999999',
}

const bordersLight = {
    ...borders,
}

const themes = {
    dark: bordersDark,
    light: bordersLight,
}

const getBorders = theme => themes[theme]

export { borders, getBorders }
