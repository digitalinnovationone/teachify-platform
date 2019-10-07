import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTableBodyRow = styled.tr`
    background: ${({ theme }) => theme.colors.backgroundAlt};
    &:hover {
        background: ${({ theme }) => theme.colors.backgroundAltHover};
        cursor: pointer;
    }
`

const TableBodyRow = ({ children }) => <StyledTableBodyRow>{children}</StyledTableBodyRow>

TableBodyRow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
}

export default TableBodyRow
