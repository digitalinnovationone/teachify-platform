import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.main`
    background: ${({ theme }) => theme.colors.background};
    grid-area: main;
    overflow-y: scroll;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Container
