import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { getUser, isAdmin } from '@utils/auth'

import MenuItem from './MenuItem'

const StyledMenuList = styled.ul`
    margin-top: 1rem;
`

const MenuList = () => {
    const { id } = getUser()
    return (
        <StyledMenuList>
            <MenuItem icon="fas fa-home" label={i18n.t('labels.home')} route={routes.home} />
            <MenuItem icon="fas fa-play-circle" label={i18n.t('labels.nanoCourses')} route={routes.courses} />
            <MenuItem icon="fas fa-user" label={i18n.t('labels.profile')} route={`${routes.profile}/${id}`} />
            {isAdmin() && <MenuItem icon="fas fa-photo-video" label={i18n.t('labels.adminCourses')} route={routes.courseList} />}
        </StyledMenuList>
    )
}

export default MenuList
