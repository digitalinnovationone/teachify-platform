import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'
import { zIndexes } from '@helpers/zIndexes'

const StyledMenuLink = styled(NavLink)`
    border-right: 3px solid transparent;
    color: ${colors.textLight};
    display: block;
    font-size: 1.125rem;
    padding: 1rem;
    position: relative;
    text-align: center;
    &.is-active {
        background: ${colors.primaryLight};
        border-right-color: ${colors.primary};
        color: ${colors.primary};
    }
    &:hover {
        background: ${colors.backgroundAltHover};
        &::after {
            opacity: 1;
            transform: translate(0, -50%);
        }
    }
    &::after {
        background: black;
        border-radius: 3px;
        color: white;
        content: attr(data-label);
        font-size: 0.8rem;
        font-weight: 300;
        left: calc(${dimensions.menuWidth} + 10px);
        opacity: 0;
        padding: 0.25rem 0.5rem;
        position: absolute;
        top: 50%;
        transform: translate(-200px, -50%);
        transition: transform 0.25s ease-out, opacity 0.5s ease-in;
        white-space: nowrap;
        z-index: ${zIndexes.menuLinkAfter};
    }
`

const MenuLink = ({ children, label, to }) => (
    <StyledMenuLink activeClassName="is-active" data-label={label} exact to={to}>
        {children}
    </StyledMenuLink>
)

MenuLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

export default MenuLink
