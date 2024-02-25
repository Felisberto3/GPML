import { AgenciaRepository } from "../../repository/respository"
import { FilterAgenciaUseCase } from "./filterAgenciaUseCase"
import { FilterAgenciaController } from "./filterAgenciaController"


const agenciaRepository = new AgenciaRepository()
const filterAgenciaUseCase = new FilterAgenciaUseCase(agenciaRepository)
const filterAgencia = new FilterAgenciaController(filterAgenciaUseCase)

export { filterAgencia }