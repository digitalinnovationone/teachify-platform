import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import TableHeaderRow from './TableHeaderRow'

const StyledTableHeader = styled.thead``

const TableHeader = ({ columns }) => (
    <StyledTableHeader>
        <TableHeaderRow columns={columns} />
    </StyledTableHeader>
)

TableHeader.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default TableHeader
