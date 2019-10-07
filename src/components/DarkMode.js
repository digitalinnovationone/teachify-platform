import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { THEMES, getTheme, setTheme, toggleTheme } from '@utils/browser'

import ThemeContext from '@contexts/Theme'

import Icon from './Icon'

const StyledDarkMode = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.textLight};
    margin-left: 1rem;
    margin-right: auto;
`

const DarkMode = () => {
    const [theme, updateTheme] = useState(getTheme())
    const { switchTheme } = useContext(ThemeContext)

    const handleDarkModeClick = () => {
        const newTheme = toggleTheme()
        updateTheme(newTheme)
        setTheme(newTheme)
        switchTheme(newTheme)
    }

    return (
        <StyledDarkMode onClick={handleDarkModeClick}>
            <Icon icon={theme === THEMES.light ? 'far fa-lightbulb' : 'fas fa-lightbulb'} />
        </StyledDarkMode>
    )
}

export default DarkMode
