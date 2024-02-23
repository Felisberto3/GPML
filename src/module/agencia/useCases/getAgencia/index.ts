import { AgenciaRepository } from "../../repository/respository"
import { GetAgenciaController } from "./getAgenciaController"
import { GetAgenciaUseCase } from "./getAgenciaUseCase"

const agenciaRepository = new AgenciaRepository()
const getAgenciaUseCase = new GetAgenciaUseCase(agenciaRepository)
const getAgencia = new GetAgenciaController(getAgenciaUseCase)

export { getAgencia }