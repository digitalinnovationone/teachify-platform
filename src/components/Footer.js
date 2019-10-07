import React from 'react'
import styled from 'styled-components'

import { dimensions } from '@helpers/dimensions'

import SocialNetworks from './socialNetworks'
import Suggestions from './suggestions'

const StyledFooter = styled.footer`
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    border-left: ${({ theme }) => theme.borders.default};
    border-top: ${({ theme }) => theme.borders.default};
    display: flex;
    grid-area: footer;
    justify-content: space-between;
    margin-left: calc(${dimensions.menuWidth} - 1px);
    padding: 0 1rem;
`

const Footer = () => (
    <StyledFooter>
        <Suggestions />
        <SocialNetworks />
    </StyledFooter>
)

export default Footer
