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
    genero: yup.string()
})


const modeloCaracteristicaSchema = yup.object({
    apelido: yup.string().required(" apelido é campo obrigatório"),
    altura: yup.number().required(" altura é campo obrigatório"),
    cintura: yup.number().required(" cintura é campo obrigatório"),
    sapato: yup.number().required(" sapato é campo obrigatório"),
    modeloId: yup.number().required(" modeloId é campo obrigatório"),
})
const updateModeloCaracteristicaSchema = yup.object({
    apelido: yup.string(),
    altura: yup.number(),
    cintura: yup.number(),
    sapato: yup.number(),
    modeloId: yup.number()
})

const authSchema = yup.object({
    email: yup.string().email().required("email é campo obrigatório!"),
    password: yup.string().required("password é campo obrigatório!"),
})


const agenciaShema = yup.object({
    nome: yup.string().required("nome is campo obrigatório"),
    slogam: yup.string().required("slogam is campo obrigatório"),
    imagem: yup.string().required("imagem is campo obrigatório"),
    sobre: yup.string().required("sobre is campo obrigatório"),
    administradorId: yup.string().required("administradorId is campo obrigatório")
})
const updateAgenciaSchema = yup.object({
    nome: yup.string(),
    slogam: yup.string(),
    imagem: yup.string(),
    sobre: yup.string(),
})

const notificacaoShema = yup.object({
    agenciaId: yup.number().required("agenciaId is campo obrigatório"),
    descricao: yup.string().required("descricao is campo obrigatório"),
    destinatarioId: yup.number(),
    remitenteId: yup.number().required("remitenteId is campo obrigatório"),
})

const agenciadosShema = yup.object({
    agencia_id: yup.number().required("agencia_id is campo obrigatório"),
    usuario_id: yup.number().required("usuario_id is campo obrigatório"),

})



export {
    shema,
    updateUsuarioSchema,
    updateModeloCaracteristicaSchema,
    modeloCaracteristicaSchema,
    authSchema,
    agenciaShema,
    updateAgenciaSchema,
    notificacaoShema,
    agenciadosShema
}