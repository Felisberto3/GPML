import { UsuarioRepository } from "../../repository/respository"
import { AuthUsuarioController } from "./authUsuarioController"
import { AuthUsuarioUseCase } from "./authUsuarioUseCase"

const usuarioRepository = new UsuarioRepository()
const authUsuarioUseCase = new AuthUsuarioUseCase(usuarioRepository)
const authUsuario = new AuthUsuarioController(authUsuarioUseCase)

export { authUsuario }