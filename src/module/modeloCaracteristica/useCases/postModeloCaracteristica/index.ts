import { UsuarioRepository } from "../../../usuario/repository/respository"
import { ModeloCaracteristicaRepository } from "../../repository/respository"
import { PostModeloCaracteristicaController } from "./postModeloCaracteristicaController"
import { PostModeloCaracteristicaUseCase } from "./postModeloCaracteristicaUseCase"

const modeloCaracteristicaRepository = new ModeloCaracteristicaRepository()
const usuarioRepository = new UsuarioRepository()
const postModeloCaracteristicaUseCase = new PostModeloCaracteristicaUseCase(modeloCaracteristicaRepository,usuarioRepository)
const postModeloCaracteristica = new PostModeloCaracteristicaController(postModeloCaracteristicaUseCase)

export { postModeloCaracteristica }