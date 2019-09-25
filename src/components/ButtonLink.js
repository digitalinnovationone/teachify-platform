import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

const StyledButtonLink = styled.button`
    background: transparent;
    border: none;
    border-bottom: ${borders.primaryLink};
    color: ${colors.primary};
    padding: 0 0.5rem;
    text-transform: lowercase;
`

const ButtonLink = ({ children, onClick, type }) => (
    <StyledButtonLink onClick={onClick} type={type}>
        {children}
    </StyledButtonLink>
)

ButtonLink.defaultProps = {
    type: 'button',
}

ButtonLink.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
}

export default ButtonLink
