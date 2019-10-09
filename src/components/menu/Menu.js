import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

import MenuList from './MenuList'

const StyledMenu = styled.nav`
    background: ${colors.backgroundAlt};
    border-right: ${borders.default};
    grid-area: menu;
`

const Menu = () => (
    <StyledMenu>
        <MenuList />
    </StyledMenu>
)

export default Menu
