import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import TableBody from './tableBody'
import TableHeader from './tableHeader'

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`

const Table = ({ columns, data, loading }) => (
    <StyledTable>
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} loading={loading} />
    </StyledTable>
)

Table.defaultProps = {
    loading: false,
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
}

export default Table
