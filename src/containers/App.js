import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'

import Container from '@components/Container'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Menu from '@components/menu'

const StyledApp = styled.div`
    background: ${colors.backgroundAlt};
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

const App = ({ children }) => (
    <StyledApp>
        <Header />
        <Menu />
        <Container>{children}</Container>
        <Footer />
    </StyledApp>
)

App.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default App
