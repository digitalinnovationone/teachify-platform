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

import { forgotPassword as forgotPasswordFields } from '../fields'
import { forgotPassword as forgotPasswordSchema } from '../schemas'

import bg from '@img/backgrounds/course.jpg'

const ForgotPassword = ({ dispatchForgotPassword, loading }) => {
    const handleFormSubmit = values => dispatchForgotPassword(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} pikisuperstar / Freepik`} background={bg}>
            <Title>{i18n.t('titles.forgotPassword')}</Title>
            <SubTitle>{i18n.t('subtitles.forgotPassword')}</SubTitle>
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
                        fields={forgotPasswordFields}
                        onSubmit={handleFormSubmit}
                        schema={forgotPasswordSchema}
                        textButton={i18n.t('buttons.updateMyPassword')}
                    />
                </Margin>
                <Link lower primary to={routes.signIn}>
                    {i18n.t('labels.orSignIn')}
                </Link>
            </If>
        </Auth>
    )
}

ForgotPassword.propTypes = {
    dispatchForgotPassword: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default ForgotPassword
