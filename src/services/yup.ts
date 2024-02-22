import * as yup from 'yup'

const shema = yup.object({
    nomeCompleto: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    tipo: yup.string().required(),
    genero: yup.string().required()
})

const updateUsuarioSchema = yup.object({
    nomeCompleto: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    tipo: yup.string(),
    genero: yup.string().required()
})

export { shema,updateUsuarioSchema }