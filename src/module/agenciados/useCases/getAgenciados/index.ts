import { AgenciadosRepository } from "../../repository/respository"
import { GetAgenciadosController } from "./getAgenciadosController"
import { GetAgenciadosUseCase } from "./getAgenciadosUseCase"

const agenciadosRepository = new AgenciadosRepository()
const getAgenciadosUseCase = new GetAgenciadosUseCase(agenciadosRepository)
const getAgenciados = new GetAgenciadosController(getAgenciadosUseCase)

export { getAgenciados }