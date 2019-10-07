const colors = {
    background: '#f5f6fa',
    backgroundAlt: '#fdfdfd',
    backgroundAltHover: '#f2f2f2',
    error: '#ff8080',
    errorHover: '#ff4d4d',
    errorLight: '#ffe6e6',
    primary: '#0099ff',
    primaryHover: '#007acc',
    primaryLight: '#e6f5ff',
    success: '#00cc99',
    successHover: '#009973',
    text: '#454545',
    textAlt: '#fdfdfd',
    textDark: '#333333',
    textError: '#ff4d4d',
    textLight: '#b3b3b3',
    warning: '#ffcc00',
    warningHover: '#cca300',
}

const colorsDark = {
    ...colors,
    background: '#595959',
    backgroundAlt: '#333333',
    backgroundAltHover: '#4d4d4d',
    text: '#cccccc',
    textAlt: '#595959',
    textDark: '#fdfdfd',
    textLight: '#999999',
}

const colorsLight = {
    ...colors,
}

const themes = {
    dark: colorsDark,
    light: colorsLight,
}

const getColors = theme => themes[theme]

export { colors, getColors }
