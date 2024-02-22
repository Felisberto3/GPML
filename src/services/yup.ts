import * as yup from 'yup'

const shema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    tipo: yup.string().required(),
    genero: yup.string().required()
})

export { shema }