import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { dimensions } from '@helpers/dimensions'

import SocialNetworks from './socialNetworks'
import Suggestions from './suggestions'

const StyledFooter = styled.footer`
    align-items: center;
    background: ${colors.background};
    border-left: ${borders.default};
    border-top: ${borders.default};
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
