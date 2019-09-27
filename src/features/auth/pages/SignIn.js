import PropTypes from 'prop-types'
import React from 'react'

import { routes } from '@routes'

import { i18n } from '@i18n'

import { not } from '@utils/functions'

import { margins } from '@helpers/margins'

import Auth from '@containers/auth'

import Form from '@components/form'
import If from '@components/If'
import Link from '@components/Link'
import Loading from '@components/Loading'
import Margin from '@components/Margin'
import SubTitle from '@components/SubTitle'
import Title from '@components/Title'

import { signIn as signInFields } from '../fields'
import { signIn as signInSchema } from '../schemas'

import bg from '@img/backgrounds/laptop-class.jpg'

const SignIn = ({ dispatchSignIn, loading }) => {
    const handleFormSubmit = values => dispatchSignIn(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} Freepik`} background={bg}>
            <Title>{i18n.t('titles.signIn')}</Title>
            <SubTitle>{i18n.t('subtitles.signIn')}</SubTitle>
            <If
                condition={not(loading)}
                el={
                    <Margin top={margins.AUTH_HEADER}>
                        <Loading />
                    </Margin>
                }
            >
                <Margin bottom={margins.AUTH_FORM} top={margins.AUTH_HEADER}>
                    <Form
                        fields={signInFields}
                        onSubmit={handleFormSubmit}
                        schema={signInSchema}
                        textButton={i18n.t('buttons.access')}
                    />
                    <Link to={routes.forgotPassword}>{i18n.t('labels.forgotPassword')}</Link>
                </Margin>
                <Link lower primary to={routes.signUp}>
                    {i18n.t('labels.orSignUp')}
                </Link>
            </If>
        </Auth>
    )
}

SignIn.propTypes = {
    dispatchSignIn: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SignIn
