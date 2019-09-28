const masks = {
    CEP: {
        blocks: [5, 3],
        delimiters: ['-'],
    },
    CNPJ: {
        blocks: [2, 3, 3, 4, 2],
        delimiters: ['.', '.', '/', '-'],
    },
    CPF: {
        blocks: [3, 3, 3, 2],
        delimiters: ['.', '.', '-'],
    },
    cellPhone: {
        blocks: [5, 4],
        delimiters: ['-'],
    },
    time: {
        blocks: [2, 2],
        delimiters: [':'],
    },
}

export { masks }
