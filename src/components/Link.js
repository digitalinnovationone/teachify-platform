import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { Link as LinkDOM } from 'react-router-dom'

const StyledLink = styled(LinkDOM)`
    border-bottom: ${({ theme }) => theme.borders.primaryLink};
    color: ${({ primary }) => (primary ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.textDark)};
    padding: 0 0.5rem;
    text-decoration: none;
    text-transform: ${({ lower }) => (lower ? 'lowercase' : null)};
`

const Link = ({ children, lower, primary, to }) => (
    <StyledLink lower={lower} primary={primary} to={to}>
        {children}
    </StyledLink>
)

Link.defaultProps = {
    lower: false,
    primary: false,
}

Link.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    lower: PropTypes.bool,
    primary: PropTypes.bool,
    to: PropTypes.string.isRequired,
}

export default Link
