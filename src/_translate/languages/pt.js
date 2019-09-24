const messages = {
    pt: {
        translations: {
            buttons: {
                access: 'Acessar',
            },
            form: {
                validations: {
                    /* eslint-disable no-template-curly-in-string */
                    email: 'O valor de ${path} deve ser um email válido',
                    max: '${path} deve conter no máximo ${min} caracteres',
                    min: '${path} deve conter no mínimo ${min} caracteres',
                    required: '${path} é um campo obrigatório',
                    /* eslint-enable no-template-curly-in-string */
                },
            },
            labels: {
                designBy: 'Desenhado por',
                forgotPassword: 'Esqueceu a senha?',
                orSignUp: 'Ou crie uma nova conta',
            },
            subtitles: {
                signIn: 'Preencha os campos abaixo para acessar sua conta',
            },
            titles: {
                signIn: 'Bem-vindo de volta!',
            },
        },
    },
}

export { messages }
