import PropTypes from 'prop-types'
import React from 'react'

import { i18n } from '@i18n'

import { not } from '@utils/functions'

import App from '@containers/App'

import Center from '@components/Center'
import Container from '../components/Container'
import Form from '@components/form'
import If from '@components/If'
import Loading from '@components/Loading'
import Padding from '@components/Padding'

import { updatePassword as updatePasswordFields } from '../fields'
import { updatePassword as updatePasswordSchema } from '../schemas'

const UpdatePassword = ({ dispatchUpdatePassword, loading }) => {
    const handleFormSubmit = values => dispatchUpdatePassword(values)
    return (
        <App>
            <Padding all={3}>
                <Center>
                    <If condition={not(loading)} el={<Loading />}>
                        <Container>
                            <Form
                                fields={updatePasswordFields}
                                onSubmit={handleFormSubmit}
                                schema={updatePasswordSchema}
                                textButton={i18n.t('buttons.updatePassword')}
                            />
                        </Container>
                    </If>
                </Center>
            </Padding>
        </App>
    )
}

UpdatePassword.propTypes = {
    dispatchUpdatePassword: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default UpdatePassword
