/* eslint-disable max-len, no-template-curly-in-string */
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
            errors: {
                api: 'Não foi possível processar sua requisição',
            },
            form: {
                validations: {
                    confirmPassword: '${path} possuí um valor diferente de senha',
                    email: 'O valor de ${path} deve ser um email válido',
                    max: '${path} deve conter no máximo ${max} caracteres',
                    min: '${path} deve conter no mínimo ${min} caracteres',
                    oneOf: '${path} possuí um valor diferente de ${values}',
                    required: '${path} é um campo obrigatório',
                },
            },
            labels: {
                code: 'Código',
                confirmPassword: 'Confirmar senha',
                designBy: 'Desenhado por',
                email: 'Email',
                forgotPassword: 'Esqueceu a senha?',
                fullName: 'Nome completo',
                orSignIn: 'Ou acesse uma conta existente',
                orSignUp: 'Ou crie uma conta',
                password: 'Senha',
                username: 'Usuário',
            },
            subtitles: {
                confirmCode:
                    'Um código de ativação foi enviado para você por email, por favor, informe o código abaixo para realizar a ativação',
                forgotPassword: 'Não se preocupe, ela está segura, vamos atualizá-la?',
                resetPassword: 'Preencha os campos abaixo para acessar atualizar sua senha',
                signIn: 'Preencha os campos abaixo para acessar sua conta',
                signUp: 'Preencha os campos abaixo para criar sua conta',
            },
            success: {
                api: 'Requisição processada com sucesso',
                functions: {
                    confirmCode: 'Sua conta foi ativada, você já pode acessá-la',
                    forgotPassword: 'Enviamos um email para você com as instruções para resetar sua senha',
                    resendCode: 'O código de ativação foi enviado novamente para você, um novo email deve chegar em instantes',
                    resetPassword: 'A senha da sua conta foi resetada, você já pode utilizá-la',
                },
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
/* eslint-enable max-len, no-template-curly-in-string */

export { messages }
