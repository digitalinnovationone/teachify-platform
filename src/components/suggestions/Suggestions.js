import React from 'react'
import styled from 'styled-components'

import { i18n } from '@i18n'

import Suggestion from './Suggestion'

const StyledSuggestions = styled.div``

const Suggestions = () => (
    <StyledSuggestions>
        <Suggestion link="https://feedback.userreport.com/ff113369-6eeb-459d-b195-931047e4d8e4/#submit/idea">
            {i18n.t('labels.suggestionFeature')}
        </Suggestion>
        <Suggestion link="https://feedback.userreport.com/ff113369-6eeb-459d-b195-931047e4d8e4/#submit/bug">
            {i18n.t('labels.reportBug')}
        </Suggestion>
    </StyledSuggestions>
)

export default Suggestions
