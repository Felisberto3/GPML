import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { UsuarioUpdateUsuarioDto } from "../../repository/interface";
import { UsuarioRepository } from "../../repository/respository";

class PutUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({  next, ...data }: UsuarioUpdateUsuarioDto) {
        
        const { password} = data
        
        
        if (password) {
            data.password = await hash( password! , 8);
        }

        return await this.usuarioRepository.update({ next, ...data})

    }
}

export { PutUsuarioUseCase };
