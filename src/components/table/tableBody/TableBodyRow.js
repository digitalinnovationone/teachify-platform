import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/colors'

const StyledTableBodyRow = styled.tr`
    background: ${colors.backgroundAlt};
    &:hover {
        background: ${colors.backgroundAltHover};
        cursor: pointer;
    }
`

const TableBodyRow = ({ children }) => <StyledTableBodyRow>{children}</StyledTableBodyRow>

TableBodyRow.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
}

export default TableBodyRow
