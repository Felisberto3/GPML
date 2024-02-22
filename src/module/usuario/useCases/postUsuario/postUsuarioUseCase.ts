import { hash } from "bcrypt"
import { ServerError } from "../../../../error/index"

import { UsuariocreateUsuarioDto } from "module/usuario/repository/interface"
import { UsuarioRepository } from "module/usuario/repository/respository"

class PostUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({ email, nomeCompleto, password }: UsuariocreateUsuarioDto) {
        const usuario = await this.usuarioRepository.findByEmail(email)

        if (usuario) {
            throw new ServerError('Usuario already exist', 400)
        }

        password = await hash(password, 8)

        return  await this.usuarioRepository.create({ email, nomeCompleto, password })

  
    }
}

export { PostUsuarioUseCase }