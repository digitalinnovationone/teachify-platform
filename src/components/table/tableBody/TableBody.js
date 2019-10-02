import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import { borders } from '@helpers/borders'

import { isNotEmpty, not } from '@utils/functions'

import If from '../../If'
import Loading from '../../Loading'
import TableBodyColumn from './TableBodyColumn'
import TableBodyRow from './TableBodyRow'

const StyledTableBody = styled.tbody`
    border: ${borders.default};
    border-top: none;
`

const TableBody = ({ columns, data, loading }) => (
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
                            <TableBodyColumn key={column}>{item[column]}</TableBodyColumn>
                        ))}
                    </TableBodyRow>
                ))}
            </If>
        </If>
    </StyledTableBody>
)

TableBody.defaultProps = {
    loading: false,
}

TableBody.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
}

export default TableBody
