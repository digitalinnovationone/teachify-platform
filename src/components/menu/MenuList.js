import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { routes } from '@routes'

import MenuItem from './MenuItem'

const StyledMenuList = styled.ul`
    margin-top: 1rem;
`

const MenuList = () => (
    <StyledMenuList>
        <MenuItem icon="fas fa-home" label={i18n.t('labels.home')} route={routes.home} />
        <MenuItem icon="fas fa-play-circle" label={i18n.t('labels.courses')} route={routes.courses} />
    </StyledMenuList>
)

export default MenuList
