import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import ListItem from './ListItem'

const StyledList = styled.ul``

const List = ({ column, data, onItemClick }) => {
    const [activeItem, updateActiveItem] = useState({})

    const handleItemClick = item => {
        updateActiveItem(item)
        onItemClick(item)
    }

    return (
        <StyledList>
            {data.map(item => (
                <ListItem active={activeItem[column] === item[column]} item={item} key={item[column]} onClick={handleItemClick}>
                    {item[column]}
                </ListItem>
            ))}
        </StyledList>
    )
}

List.defaultProps = {
    onItemClick: null,
}

List.propTypes = {
    column: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onItemClick: PropTypes.func,
}

export default List
