import { AgenciaRepository } from "../../repository/respository"
import { PutAgenciaController } from "./putAgenciaController"
import { PutAgenciaUseCase } from "./putAgenciaUseCase"

const agenciaRepository = new AgenciaRepository()
const putAgenciaUseCase = new PutAgenciaUseCase(agenciaRepository)
const putAgencia = new PutAgenciaController(putAgenciaUseCase)

export { putAgencia }