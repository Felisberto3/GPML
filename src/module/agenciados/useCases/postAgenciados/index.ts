import { AgenciadosRepository } from "../../repository/respository"
import { PostAgenciadosController } from "./postAgenciadosController"
import { PostAgenciadosUseCase } from "./postAgenciadosUseCase"

const agenciadosRepository = new AgenciadosRepository()
const postAgenciadosUseCase = new PostAgenciadosUseCase(agenciadosRepository)
const postAgenciados = new PostAgenciadosController(postAgenciadosUseCase)

export { postAgenciados }