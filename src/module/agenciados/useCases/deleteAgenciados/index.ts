import { AgenciaRepository } from "../../../agencia/repository/respository"
import { AgenciadosRepository } from "../../repository/respository"
import { DeleteAgenciadosController } from "./deleteAgenciadosController"
import { DeleteAgenciadosUseCase } from "./deleteAgenciadosUseCase"

const agenciadosRepository = new AgenciadosRepository()
const agenciaRepository = new AgenciaRepository()
const deleteAgenciadosUseCase = new DeleteAgenciadosUseCase(agenciadosRepository,agenciaRepository)
const deleteAgenciados = new DeleteAgenciadosController(deleteAgenciadosUseCase)

export { deleteAgenciados }