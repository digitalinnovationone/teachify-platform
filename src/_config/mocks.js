const mocks = {
    course: {
        categories: ['curso', 'primeira'].join(', '),
        describe: 'Descrição do curso',
        instructor: 'ebc220f9-6418-41f6-8785-06cd41e61d03',
        name: 'Meu primeiro curso',
        sections: [
            {
                classes: [
                    {
                        name: 'Minha primeira aula',
                        source: 'https://www.youtube.com/watch?v=A4IeZ9VzxNs',
                    },
                ],
                name: 'Minha primeira seção',
            },
        ],
        thumbnail: 'https://www.teachify.com.br',
    },
}

export { mocks }
