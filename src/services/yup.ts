import * as yup from 'yup'

const shema = yup.object({
    nameCompleto: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})

export { shema }