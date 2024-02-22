import { ModeloCaracteristicaRepository } from "../../repository/respository"
import { PostModeloCaracteristicaController } from "./postModeloCaracteristicaController"
import { PostModeloCaracteristicaUseCase } from "./postModeloCaracteristicaUseCase"

const modeloCaracteristicaRepository = new ModeloCaracteristicaRepository()
const postModeloCaracteristicaUseCase = new PostModeloCaracteristicaUseCase(modeloCaracteristicaRepository)
const postModeloCaracteristica = new PostModeloCaracteristicaController(postModeloCaracteristicaUseCase)

export { postModeloCaracteristica }