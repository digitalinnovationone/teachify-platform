import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { getTheme } from '@utils/browser'

import { getBorders } from '@helpers/borders'
import { getColors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'

import ThemeContext from '@contexts/Theme'

import Container from '@components/Container'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Menu from '@components/menu'

const StyledApp = styled.div`
    background: ${({ theme }) => theme.colors.backgroundAlt};
    display: grid;
    grid-template:
        'header header' ${dimensions.headerHeight}
        'menu main' calc(${dimensions.contentHeight} - ${dimensions.headerHeight} - ${dimensions.footerHeight})
        'footer footer' ${dimensions.footerHeight} / ${dimensions.menuWidth} calc(
            ${dimensions.contentWidth} - ${dimensions.menuWidth}
        );
    height: 100vh;
    width: 100vw;
`

const App = ({ children }) => {
    const [theme, updateTheme] = useState({
        borders: getBorders(getTheme()),
        colors: getColors(getTheme()),
    })

    const handleSwitchTheme = newTheme =>
        updateTheme({
            borders: getBorders(newTheme),
            colors: getColors(newTheme),
        })

    return (
        <ThemeContext.Provider value={{ switchTheme: handleSwitchTheme }}>
            <ThemeProvider theme={theme}>
                <StyledApp>
                    <Header />
                    <Menu />
                    <Container>{children}</Container>
                    <Footer />
                </StyledApp>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default App
