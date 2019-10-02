import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'

import TableHeaderColumn from './TableHeaderColumn'

const StyledTableHeaderRow = styled.tr`
    background: #eef0f6;
    border: ${borders.default};
`

const TableHeaderRow = ({ columns }) => (
    <StyledTableHeaderRow>
        {columns.map(column => (
            <TableHeaderColumn key={column}>{column}</TableHeaderColumn>
        ))}
    </StyledTableHeaderRow>
)

TableHeaderRow.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeaderRow
