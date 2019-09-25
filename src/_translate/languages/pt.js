const messages = {
    pt: {
        translations: {
            buttons: {
                access: 'Acessar',
                createAccount: 'Criar conta',
                resendCode: 'Enviar código novamente',
                updateMyPassword: 'Atualizar minha senha',
                updatePassword: 'Atualizar senha',
            },
            form: {
                validations: {
                    /* eslint-disable no-template-curly-in-string */
                    email: 'O valor de ${path} deve ser um email válido',
                    max: '${path} deve conter no máximo ${max} caracteres',
                    min: '${path} deve conter no mínimo ${min} caracteres',
                    required: '${path} é um campo obrigatório',
                    /* eslint-enable no-template-curly-in-string */
                },
            },
            labels: {
                code: 'Código',
                confirmNewPassword: 'Confirmar nova senha',
                designBy: 'Desenhado por',
                email: 'Email',
                forgotPassword: 'Esqueceu a senha?',
                fullName: 'Nome completo',
                newPassword: 'Nova senha',
                orSignIn: 'Ou acesse uma conta existente',
                orSignUp: 'Ou crie uma conta',
                password: 'Senha',
                username: 'Usuário',
            },
            subtitles: {
                confirmCode: 'Informe o código abaixo para realizar a ativação',
                forgotPassword: 'Não se preocupe, ela está segura, vamos atualizá-la?',
                resetPassword: 'Preencha os campos abaixo para acessar atualizar sua senha',
                signIn: 'Preencha os campos abaixo para acessar sua conta',
                signUp: 'Preencha os campos abaixo para criar sua conta',
            },
            titles: {
                confirmCode: 'Confirmar código de ativação',
                forgotPassword: 'Esqueceu sua senha?',
                resetPassword: 'Atualize sua senha',
                signIn: 'Bem-vindo de volta!',
                signUp: 'Olá, sem bem-vindo!',
            },
        },
    },
}

export { messages }
