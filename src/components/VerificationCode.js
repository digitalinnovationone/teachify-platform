import { keyboard } from '@constants/keyboard'

import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'

import { borders } from '@helpers/borders'
import { colors } from '@helpers/colors'
import { inputFocus } from '@helpers/mixins'

import { toInt } from '@utils/number'

const StyledVerificationCode = styled.div`
    display: flex;
    justify-content: center;
`

const StyledCode = styled.input`
    border: ${borders.default};
    border-radius: 5px;
    color: ${colors.text};
    font-size: 2rem;
    margin-right: 1rem;
    ${inputFocus};
    padding: 1rem;
    text-align: center;
    width: 100%;
    &:last-child {
        margin-right: 0;
    }
`

const VerificationCode = ({ length, onComplete }) => {
    const [code, updateCode] = useState([])

    const handleCodeChange = (event, index) => {
        const { target } = event
        if (target.value.trim()) {
            const newCode = [...code]
            const nextCode = target.nextElementSibling
            newCode[index] = target.value
            updateCode(newCode)
            if (nextCode) {
                nextCode.focus()
            } else {
                const codeIsComplete = newCode.length === length
                if (codeIsComplete) {
                    onComplete(toInt(newCode.join('')))
                    target.blur()
                }
            }
        } else {
            const newCode = [...code]
            newCode.pop()
            updateCode(newCode)
        }
    }

    const handleBackspace = event => {
        const { key, target } = event
        if (key === keyboard.BACKSPACE) {
            if (target.value === '') {
                const previousCode = target.previousElementSibling
                if (previousCode) {
                    previousCode.focus()
                }
            }
        }
    }

    return (
        <StyledVerificationCode>
            {Array(length)
                .fill(null)
                .map((_, index) => (
                    <StyledCode
                        key={index}
                        maxLength={1}
                        onChange={event => handleCodeChange(event, index)}
                        onKeyDown={handleBackspace}
                        type="text"
                        value={code[index]}
                    />
                ))}
        </StyledVerificationCode>
    )
}

VerificationCode.propTypes = {
    length: PropTypes.number.isRequired,
    onComplete: PropTypes.func.isRequired,
}

export default VerificationCode
