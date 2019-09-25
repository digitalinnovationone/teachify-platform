import { css } from 'styled-components'

import { colors } from './colors'

const inputFocus = css`
    &:focus {
        box-shadow: 0 0 7px rgba(0, 153, 255, 0.75);
        border-color: ${colors.primary};
    }
`

export { inputFocus }
