import { ModeloCaracteristicaRepository } from "../../repository/respository"
import { PutModeloCaracteristicaController } from "./putModeloCaracteristicaController"
import { PutModeloCaracteristicaUseCase } from "./putModeloCaracteristicaUseCase"

const modeloCaracteristicaRepository = new ModeloCaracteristicaRepository()
const putModeloCaracteristicaUseCase = new PutModeloCaracteristicaUseCase(modeloCaracteristicaRepository)
const putModeloCaracteristica = new PutModeloCaracteristicaController(putModeloCaracteristicaUseCase)

export { putModeloCaracteristica }