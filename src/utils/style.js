import { css } from 'styled-components'

const createButtonMixin = (color, textColor, hoverColor) => css`
    background: ${color};
    color: ${textColor};
    &:hover {
        background: ${hoverColor};
    }
`

export { createButtonMixin }
