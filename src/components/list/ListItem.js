import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'

const StyledListItem = styled.li`
    align-items: center;
    background: ${({ active }) => (active ? colors.backgroundAltHover : colors.backgroundAlt)};
    border-bottom: ${borders.default};
    color: ${colors.text};
    display: flex;
    font-weight: 300;
    justify-content: space-between;
    list-style: none;
    padding: 0.75rem 1rem;
    text-align: left;
    &:hover {
        background: ${colors.backgroundAltHover};
        cursor: pointer;
    }
    &:last-child {
        border-bottom: none;
    }
`

const ListItem = ({ active, children, item, onClick }) => (
    <StyledListItem active={active} onClick={() => onClick && onClick(item)}>
        {children}
    </StyledListItem>
)

ListItem.defaultProps = {
    active: false,
    onClick: null,
}

ListItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default ListItem
