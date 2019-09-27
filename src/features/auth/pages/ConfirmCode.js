import PropTypes from 'prop-types'
import React from 'react'

import { i18n } from '@i18n'

import { getQueryParams } from '@utils/browser'
import { not } from '@utils/functions'

import { margins } from '@helpers/margins'

import Auth from '@containers/auth'

import ButtonLink from '@components/ButtonLink'
import If from '@components/If'
import Loading from '@components/Loading'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import VerificationCode from '@components/VerificationCode'

import bg from '@img/backgrounds/laptop-graduation-cap-timer.jpg'

const CONFIRM_CODE_GAP = 2

const ConfirmCode = ({ dispatchConfirmCode, dispatchResendCode, loading }) => {
    const { email } = getQueryParams()
    const handleCompleteCode = code => dispatchConfirmCode({ code, email })
    const handleResendCode = () => dispatchResendCode({ email })
    return (
        <Auth author={`${i18n.t('labels.designBy')} Freepik`} background={bg}>
            <Title>{i18n.t('titles.confirmCode')}</Title>
            <SubTitle>{i18n.t('subtitles.confirmCode')}</SubTitle>
            <If
                condition={not(loading)}
                el={
                    <Margin top={margins.AUTH_HEADER}>
                        <Loading />
                    </Margin>
                }
            >
                <Margin bottom={margins.AUTH_FORM + CONFIRM_CODE_GAP} top={margins.AUTH_HEADER}>
                    <VerificationCode length={6} onComplete={handleCompleteCode} />
                </Margin>
                <ButtonLink onClick={handleResendCode}>{i18n.t('buttons.resendCode')}</ButtonLink>
            </If>
        </Auth>
    )
}

ConfirmCode.propTypes = {
    dispatchConfirmCode: PropTypes.func.isRequired,
    dispatchResendCode: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ConfirmCode
