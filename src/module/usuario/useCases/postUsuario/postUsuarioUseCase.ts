import { hash } from "bcrypt"
import { ServerError } from "../../../../error/index"

import { UsuariocreateUsuarioDto } from "../../repository/interface"
import { UsuarioRepository } from "../../repository/respository"

class PostUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({ email, nomeCompleto, password }: UsuariocreateUsuarioDto) {
        
        try {
            const usuario = await this.usuarioRepository.findByEmail(email)
            password = await hash(password, 8)
    
            return  await this.usuarioRepository.create({ email, nomeCompleto, password })
            
        } catch (error) {
            
            throw new ServerError('Usuario already exist', 400)
        }


  
    }
}

export { PostUsuarioUseCase }