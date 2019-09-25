import React from 'react'

import { routes } from '@routes'

import { i18n } from '@i18n'

import Auth from '@containers/auth'

import Form from '@components/form'
import Link from '@components/Link'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { forgotPassword as forgotPasswordFields } from '../fields'
import { forgotPassword as forgotPasswordSchema } from '../schemas'

import bg from '@img/backgrounds/course.jpg'

const ForgotPassword = () => {
    const handleFormSubmit = values => console.log(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} pikisuperstar / Freepik`} background={bg}>
            <Title>{i18n.t('titles.forgotPassword')}</Title>
            <SubTitle>{i18n.t('subtitles.forgotPassword')}</SubTitle>
            <Margin bottom={1} top={7}>
                <Form
                    fields={forgotPasswordFields}
                    onSubmit={handleFormSubmit}
                    schema={forgotPasswordSchema}
                    textButton={i18n.t('buttons.updateMyPassword')}
                />
            </Margin>
            <Link lower primary to={routes.signIn}>
                {i18n.t('labels.orSignIn')}
            </Link>
        </Auth>
    )
}

export default ForgotPassword
