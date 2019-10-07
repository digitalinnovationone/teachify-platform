import React from 'react'
import styled from 'styled-components'

import Brand from './Brand'
import DarkMode from './DarkMode'
import Profile from './profile'

const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.backgroundAlt};
    border-bottom: ${({ theme }) => theme.borders.default};
    display: flex;
    grid-area: header;
    justify-content: space-between;
`

const Header = () => (
    <StyledHeader>
        <Brand />
        <DarkMode />
        <Profile />
    </StyledHeader>
)

export default Header
