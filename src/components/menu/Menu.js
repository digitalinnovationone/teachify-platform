import React from 'react'
import styled from 'styled-components'

import MenuList from './MenuList'

const StyledMenu = styled.nav`
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-right: ${({ theme }) => theme.borders.default};
    grid-area: menu;
`

const Menu = () => (
    <StyledMenu>
        <MenuList />
    </StyledMenu>
)

export default Menu
