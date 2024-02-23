import { AgenciaRepository } from "../../repository/respository"
import { DeleteAgenciaController } from "./deleteAgenciaController"
import { DeleteAgenciaUseCase } from "./deleteAgenciaUseCase"

const agenciaRepository = new AgenciaRepository()
const deleteAgenciaUseCase = new DeleteAgenciaUseCase(agenciaRepository)
const deleteAgencia = new DeleteAgenciaController(deleteAgenciaUseCase)

export { deleteAgencia }