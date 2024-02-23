import { AgenciadosRepository } from "../../repository/respository"
import { DeleteAgenciadosController } from "./deleteAgenciadosController"
import { DeleteAgenciadosUseCase } from "./deleteAgenciadosUseCase"

const agenciadosRepository = new AgenciadosRepository()
const deleteAgenciadosUseCase = new DeleteAgenciadosUseCase(agenciadosRepository)
const deleteAgenciados = new DeleteAgenciadosController(deleteAgenciadosUseCase)

export { deleteAgenciados }