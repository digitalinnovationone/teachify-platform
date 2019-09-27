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

import { signUp as signUpFields } from '../fields'
import { signUp as signUpSchema } from '../schemas'

import bg from '@img/backgrounds/person-sit-books.jpg'

const SIGN_UP_OFFSET_GAP = 2

const SignUp = ({ dispatchSignUp, loading }) => {
    const handleFormSubmit = values => dispatchSignUp(values)
    return (
        <Auth author={`${i18n.t('labels.designBy')} fullvector / Freepi`} background={bg}>
            <Title>{i18n.t('titles.signUp')}</Title>
            <SubTitle>{i18n.t('subtitles.signUp')}</SubTitle>
            <If
                condition={not(loading)}
                el={
                    <Margin top={margins.AUTH_HEADER}>
                        <Loading />
                    </Margin>
                }
            >
                <Margin bottom={margins.AUTH_FORM} top={margins.AUTH_HEADER - SIGN_UP_OFFSET_GAP}>
                    <Form
                        fields={signUpFields}
                        onSubmit={handleFormSubmit}
                        schema={signUpSchema}
                        textButton={i18n.t('buttons.createAccount')}
                    />
                </Margin>
                <Link lower primary to={routes.signIn}>
                    {i18n.t('labels.orSignIn')}
                </Link>
            </If>
        </Auth>
    )
}

SignUp.propTypes = {
    dispatchSignUp: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default SignUp
