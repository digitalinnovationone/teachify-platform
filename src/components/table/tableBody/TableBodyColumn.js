import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { paddings } from '@helpers/paddings'

const StyledTableBodyColumn = styled.td`
    border-right: ${borders.default};
    color: ${colors.text};
    font-size: 0.95rem;
    font-weight: 300;
    padding: ${paddings.tableColumn};
    text-align: ${({ colSpan }) => (colSpan ? 'center' : 'left')};
    &:last-child {
        border-right: none;
    }
`

const TableBodyColumn = ({ children, colSpan }) => <StyledTableBodyColumn colSpan={colSpan}>{children}</StyledTableBodyColumn>

TableBodyColumn.defaultProps = {
    children: '',
    colSpan: null,
}

TableBodyColumn.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.string]),
    colSpan: PropTypes.number,
}

export default TableBodyColumn
