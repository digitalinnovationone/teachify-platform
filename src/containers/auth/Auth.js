import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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

const Auth = ({ author, background, children }) => (
    <Main>
        <Container>
            <StyledLogo>
                <Logo />
            </StyledLogo>
            <Form>{children}</Form>
        </Container>
        <Background author={author} source={background} />
    </Main>
)

Auth.propTypes = {
    author: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Auth
