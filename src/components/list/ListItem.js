import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledListItem = styled.li`
    align-items: center;
    background: ${({ active }) =>
        active ? ({ theme }) => theme.colors.backgroundAltHover : ({ theme }) => theme.colors.backgroundAlt};
    border-bottom: ${({ theme }) => theme.borders.default};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    font-weight: 300;
    justify-content: space-between;
    list-style: none;
    padding: 0.75rem 1rem;
    text-align: left;
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundAltHover};
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
