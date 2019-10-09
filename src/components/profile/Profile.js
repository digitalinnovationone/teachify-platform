import React, { useState } from 'react'
import styled from 'styled-components'

import { getUser } from '@utils/auth'
import { not } from '@utils/functions'

import { borders } from '@helpers/borders'

import DropDown from './DropDown'
import Name from './Name'
import Options from './Options'
import Picture from './Picture'

const StyledProfile = styled.div`
    align-items: center;
    border-left: ${borders.default};
    display: flex;
    height: 100%;
    padding: 0.5rem 1rem;
    position: relative;
`

const Profile = () => {
    const [expanded, updateExpanded] = useState(false)
    const { name, pictureSource } = getUser()

    const handleDropDownClick = () => updateExpanded(not(expanded))

    return (
        <StyledProfile>
            <Picture alt={name} source={pictureSource} />
            <Name>{name}</Name>
            <DropDown expanded={expanded} onClick={handleDropDownClick} />
            <Options expanded={expanded} onClick={handleDropDownClick} />
        </StyledProfile>
    )
}

export default Profile
