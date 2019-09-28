import { css } from 'styled-components'

import { colors } from './colors'

const inputFocus = css`
    &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 7px rgba(0, 153, 255, 0.75);
    }
`

const field = css`
    background: ${({ invalid }) => (invalid ? colors.errorLight : colors.background)};
    border: 1px solid transparent;
    border-radius: 4px;
    color: ${({ invalid }) => (invalid ? colors.textError : colors.text)};
    font-size: 1.375rem;
    ${inputFocus};
    padding: 1rem ${({ icon }) => (icon ? 4 : 2)}rem;
    transition: all 0.15s ease-in;
    width: 100%;
    &::placeholder {
        color: ${({ invalid }) => (invalid ? colors.error : colors.textLight)};
    }
`

export { field, inputFocus }
