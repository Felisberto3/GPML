import { UsuarioRepository } from "../../repository/respository"
import { PutUsuarioController } from "./putUsuarioController"
import { PutUsuarioUseCase } from "./putUsuarioUseCase"

const usuarioRepository = new UsuarioRepository()
const putUsuarioUseCase = new PutUsuarioUseCase(usuarioRepository)
const putUsuario = new PutUsuarioController(putUsuarioUseCase)

export { putUsuario }