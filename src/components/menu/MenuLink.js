import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

import { colors } from '@helpers/colors'

const StyledMenuLink = styled(NavLink)`
    border-right: 3px solid transparent;
    color: ${colors.textLight};
    display: block;
    font-size: 1.125rem;
    padding: 1rem;
    text-align: center;
    &.is-active {
        background: ${colors.primaryLight};
        border-right-color: ${colors.primary};
        color: ${colors.primary};
    }
    &:hover {
        background: ${colors.backgroundAltHover};
    }
`

const MenuLink = ({ children, to }) => (
    <StyledMenuLink activeClassName="is-active" to={to}>
        {children}
    </StyledMenuLink>
)

MenuLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    to: PropTypes.string.isRequired,
}

export default MenuLink
