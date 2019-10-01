import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'
import { routes } from '@routes'

import { colors } from '@helpers/colors'

import { getUser, logout } from '@utils/auth'
import { navigateTo } from '@utils/browser'

import Icon from '@components/Icon'
import Option from './Option'

const StyledOptions = styled.ul`
    background: ${colors.backgroundAlt};
    border-radius: 7px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
    left: 0;
    opacity: ${({ expanded }) => (expanded ? 1 : 0)};
    position: absolute;
    top: 80px;
    transform: ${({ expanded }) => (expanded ? 'translateY(0)' : 'translateY(-200px)')};
    transition: all 0.4s ease-in-out;
    width: 95%;
`

const Options = ({ expanded, onClick }) => {
    const { id } = getUser()
    const optionsRef = useRef()

    useEffect(() => {
        if (expanded) {
            document.addEventListener('click', outsideClick)
            return () => document.removeEventListener('click', outsideClick)
        }
    })

    const handleProfileClick = () => navigateTo(`${routes.profile}/${id}`)

    const handleUpdatePasswordClick = () => navigateTo(routes.updatePassword)

    const handleLogoutClick = () => {
        logout()
        navigateTo(routes.signIn)
    }

    const outsideClick = ({ target }) => {
        if (optionsRef.current && !optionsRef.current.contains(target)) {
            onClick()
        }
    }

    return (
        <StyledOptions expanded={expanded} ref={optionsRef}>
            <Option onClick={handleProfileClick}>
                <Icon icon="fas fa-user" />
                {i18n.t('labels.profile')}
            </Option>
            <Option onClick={handleUpdatePasswordClick}>
                <Icon icon="fas fa-lock" />
                {i18n.t('labels.updatePassword')}
            </Option>
            <Option onClick={handleLogoutClick}>
                <Icon icon="fas fa-sign-out-alt" />
                {i18n.t('labels.logout')}
            </Option>
        </StyledOptions>
    )
}

Options.propTypes = {
    expanded: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Options
