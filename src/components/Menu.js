import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

const StyledMenu = styled.nav`
    background: ${colors.backgroundAlt};
    border-right: ${borders.default};
    grid-area: menu;
`

const Menu = () => <StyledMenu />

export default Menu
