import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

import Brand from './Brand'
import Profile from './profile'

const StyledHeader = styled.header`
    background: ${colors.backgroundAlt};
    border-bottom: ${borders.default};
    display: flex;
    grid-area: header;
    justify-content: space-between;
`

const Header = () => (
    <StyledHeader>
        <Brand />
        <Profile />
    </StyledHeader>
)

export default Header
