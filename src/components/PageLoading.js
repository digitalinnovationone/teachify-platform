import React from 'react'
import styled from 'styled-components'

import Loading from './Loading'

const StyledPageLoading = styled.div`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

const PageLoading = () => (
    <StyledPageLoading>
        <Loading />
    </StyledPageLoading>
)

export default PageLoading
