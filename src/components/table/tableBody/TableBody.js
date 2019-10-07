import { columns as cols } from '@constants/columns'

import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { isNotEmpty, not } from '@utils/functions'

import ButtonCancel, { StyledButtonCancel } from '../../ButtonCancel'
import ButtonEdit, { StyledButtonEdit } from '../../ButtonEdit'
import Icon from '../../Icon'
import If from '../../If'
import Loading from '../../Loading'
import TableBodyColumn from './TableBodyColumn'
import TableBodyRow from './TableBodyRow'

const StyledTableBody = styled.tbody`
    border: ${({ theme }) => theme.borders.default};
    border-top: none;
    ${StyledButtonCancel} {
        margin-right: 0;
    }

    ${StyledButtonEdit} {
        margin-right: 0.5rem;
    }
`

const TableBody = ({ columns, data, loading, onColumnRender, onEdit, onRemove }) => (
    <StyledTableBody>
        <If
            condition={not(loading)}
            el={
                <TableBodyRow>
                    <TableBodyColumn colSpan={columns.length}>
                        <Loading size="xs" />
                    </TableBodyColumn>
                </TableBodyRow>
            }
        >
            <If
                condition={isNotEmpty(data)}
                el={
                    <TableBodyRow>
                        <TableBodyColumn colSpan={columns.length}>{i18n.t('labels.emptyTable')}</TableBodyColumn>
                    </TableBodyRow>
                }
            >
                {data.map(item => (
                    <TableBodyRow key={item.id}>
                        {columns.map(column => (
                            <If
                                condition={column === cols.actions}
                                el={
                                    <TableBodyColumn>
                                        {onColumnRender ? onColumnRender(item[column], column) : item[column]}
                                    </TableBodyColumn>
                                }
                                key={column}
                            >
                                <TableBodyColumn hasActions={column === cols.actions}>
                                    <ButtonEdit onClick={() => onEdit(item)}>
                                        <Icon icon="fas fa-pencil-alt" />
                                    </ButtonEdit>
                                    <ButtonCancel onClick={() => onRemove(item)}>
                                        <Icon icon="fas fa-trash" />
                                    </ButtonCancel>
                                </TableBodyColumn>
                            </If>
                        ))}
                    </TableBodyRow>
                ))}
            </If>
        </If>
    </StyledTableBody>
)

TableBody.defaultProps = {
    loading: false,
    onColumnRender: null,
    onEdit: null,
    onRemove: null,
}

TableBody.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    onColumnRender: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
}

export default TableBody
