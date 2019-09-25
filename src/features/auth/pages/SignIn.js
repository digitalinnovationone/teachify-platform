import React from 'react'

import { routes } from '@routes'

import { i18n } from '@i18n'

import Auth from '@containers/auth'

import Form from '@components/form'
import Link from '@components/Link'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { signIn as signInFields } from '../fields'
import { signIn as signInSchema } from '../schemas'

import bg from '@img/backgrounds/laptop-class.jpg'

const SignIn = () => {
    const handleFormSubmit = values => console.log(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} Freepik`} background={bg}>
            <Title>{i18n.t('titles.signIn')}</Title>
            <SubTitle>{i18n.t('subtitles.signIn')}</SubTitle>
            <Margin bottom={1} top={7}>
                <Form fields={signInFields} onSubmit={handleFormSubmit} schema={signInSchema} textButton={i18n.t('buttons.access')} />
                <Link to={routes.forgotPassword}>{i18n.t('labels.forgotPassword')}</Link>
            </Margin>
            <Link lower primary to={routes.signUp}>
                {i18n.t('labels.orSignUp')}
            </Link>
        </Auth>
    )
}

export default SignIn
