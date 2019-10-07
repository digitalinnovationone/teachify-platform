import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-radius: 7px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: inline-block;
    padding: 0 2rem;
    width: 100%;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Container
