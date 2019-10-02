import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import TableBody from './tableBody'
import TableHeader from './tableHeader'

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Table = ({ columns, ...props }) => (
    <StyledTable>
        <TableHeader columns={columns} />
        <TableBody {...props} columns={columns} />
    </StyledTable>
)

Table.defaultProps = {
    loading: false,
    onEdit: null,
    onRemove: null,
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
}

export default Table
