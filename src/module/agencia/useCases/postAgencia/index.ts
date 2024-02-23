import { AgenciaRepository } from "../../repository/respository"
import { PostAgenciaController } from "./postAgenciaController"
import { PostAgenciaUseCase } from "./postAgenciaUseCase"

const agenciaRepository = new AgenciaRepository()
const postAgenciaUseCase = new PostAgenciaUseCase(agenciaRepository)
const postAgencia = new PostAgenciaController(postAgenciaUseCase)

export { postAgencia }