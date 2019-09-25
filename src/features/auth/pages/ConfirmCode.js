import React from 'react'

import { i18n } from '@i18n'

import Auth from '@containers/auth'

import ButtonLink from '@components/ButtonLink'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'
import VerificationCode from '@components/VerificationCode'

import bg from '@img/backgrounds/laptop-graduation-cap-timer.jpg'

const ConfirmCode = () => {
    const handleCompleteCode = values => console.log(values)
    const handleResendCode = () => console.log('CLIQUEI!!!')
    return (
        <Auth author={`${i18n.t('labels.designBy')} Freepik`} background={bg}>
            <Title>{i18n.t('titles.confirmCode')}</Title>
            <SubTitle>{i18n.t('subtitles.confirmCode')}</SubTitle>
            <Margin bottom={3} top={7}>
                <VerificationCode length={6} onComplete={handleCompleteCode} />
            </Margin>
            <ButtonLink onClick={handleResendCode}>{i18n.t('buttons.resendCode')}</ButtonLink>
        </Auth>
    )
}

export default ConfirmCode
