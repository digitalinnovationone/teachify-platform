import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { StyledIcon } from 'components/Icon'

const StyledOption = styled.li`
    color: ${({ theme }) => theme.colors.text};
    font-weight: 300;
    list-style: none;
    padding: 1rem;
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundAltHover};
        cursor: pointer;
    }

    ${StyledIcon} {
        margin-right: 1rem;
        vertical-align: baseline;
    }
`

const Option = ({ children, onClick }) => <StyledOption onClick={onClick}>{children}</StyledOption>

Option.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Option
