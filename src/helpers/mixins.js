import { css } from 'styled-components'

import { colors } from './colors'

const inputFocus = css`
    &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 7px rgba(0, 153, 255, 0.75);
    }
`

export { inputFocus }
