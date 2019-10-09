import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { paddings } from '@helpers/paddings'

const StyledTableHeaderColumn = styled.th`
    border-right: ${borders.default};
    color: ${colors.text};
    font-weight: 500;
    padding: ${paddings.tableColumn};
    text-align: left;
    width: ${({ hasActions }) => (hasActions ? '165px' : 'initial')};
    &:last-child {
        border-right: none;
    }
`

const TableHeaderColumn = ({ children, hasActions }) => (
    <StyledTableHeaderColumn hasActions={hasActions}>{i18n.t(`labels.${children}`)}</StyledTableHeaderColumn>
)

TableHeaderColumn.defaultProps = {
    hasActions: false,
}

TableHeaderColumn.propTypes = {
    children: PropTypes.string.isRequired,
    hasActions: PropTypes.bool,
}

export default TableHeaderColumn
