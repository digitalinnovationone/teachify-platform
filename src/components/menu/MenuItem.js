import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Icon from '../Icon'

import MenuLink from './MenuLink'

const StyledMenuItem = styled.li``

const MenuItem = ({ icon, label, route }) => (
    <StyledMenuItem>
        <MenuLink label={label} to={route}>
            <Icon icon={icon} />
        </MenuLink>
    </StyledMenuItem>
)

MenuItem.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
}

export default MenuItem
