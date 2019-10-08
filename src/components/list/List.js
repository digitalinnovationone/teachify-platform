import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import ButtonCancel, { StyledButtonCancel } from '../ButtonCancel'
import ButtonEdit, { StyledButtonEdit } from '../ButtonEdit'
import Icon from '../Icon'

import ListItem from './ListItem'

const BTN_GAP = '0.25rem 0.5rem'

const StyledList = styled.ul`
    ${StyledButtonCancel} {
        padding: ${BTN_GAP};
    }

    ${StyledButtonEdit} {
        margin-right: 0.5rem;
        padding: ${BTN_GAP};
    }
`

const List = ({ column, data, onEdit, onItemClick, onRemove }) => {
    const [activeItem, updateActiveItem] = useState({})

    const handleItemClick = item => {
        updateActiveItem(item)
        onItemClick(item)
    }

    const handleEditClick = (event, item) => {
        event.stopPropagation()
        onEdit(item)
    }

    const handleRemoveClick = (event, item) => {
        event.stopPropagation()
        onRemove(item)
    }

    return (
        <StyledList>
            {data.map(item => (
                <ListItem active={activeItem[column] === item[column]} item={item} key={item[column]} onClick={handleItemClick}>
                    {item[column]}
                    <div>
                        <ButtonEdit onClick={e => handleEditClick(e, item)}>
                            <Icon icon="fas fa-pencil-alt" />
                        </ButtonEdit>
                        <ButtonCancel onClick={e => handleRemoveClick(e, item)}>
                            <Icon icon="fas fa-times" />
                        </ButtonCancel>
                    </div>
                </ListItem>
            ))}
        </StyledList>
    )
}

List.defaultProps = {
    onEdit: null,
    onItemClick: null,
    onRemove: null,
}

List.propTypes = {
    column: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEdit: PropTypes.func,
    onItemClick: PropTypes.func,
    onRemove: PropTypes.func,
}

export default List
