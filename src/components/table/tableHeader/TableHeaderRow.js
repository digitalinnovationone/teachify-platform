import { columns as cols } from '@constants/columns'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import TableHeaderColumn from './TableHeaderColumn'

const StyledTableHeaderRow = styled.tr`
    background: #eef0f6;
    border: ${({ theme }) => theme.borders.default};
`

const TableHeaderRow = ({ columns }) => (
    <StyledTableHeaderRow>
        {columns.map(column => (
            <TableHeaderColumn hasActions={column === cols.actions} key={column}>
                {column}
            </TableHeaderColumn>
        ))}
    </StyledTableHeaderRow>
)

TableHeaderRow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeaderRow
