import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledContainer = styled.main`
    background: ${colors.background};
    grid-area: main;
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
}

export default Container
