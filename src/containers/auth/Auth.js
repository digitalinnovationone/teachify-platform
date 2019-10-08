import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

import ThemeContext from '@contexts/Theme'

import Logo from '@components/Logo'

import Background from './components/Background'
import Container from './components/Container'
import Form from './components/Form'

const Main = styled.main`
    display: flex;
`

const StyledLogo = styled.div`
    margin-bottom: 2rem;
`

const Auth = ({ author, background, children }) => {
    const [theme, updateTheme] = useState({ borders, colors })

    const handleSwitchTheme = newTheme => updateTheme(newTheme)

    return (
        <ThemeContext.Provider value={{ switchTheme: handleSwitchTheme }}>
            <ThemeProvider theme={theme}>
                <Main>
                    <Container>
                        <StyledLogo>
                            <Logo />
                        </StyledLogo>
                        <Form>{children}</Form>
                    </Container>
                    <Background author={author} source={background} />
                </Main>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

Auth.propTypes = {
    author: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Auth
