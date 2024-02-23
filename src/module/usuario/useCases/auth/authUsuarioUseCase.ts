import { hash, compare } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { UsuarioUpdateUsuarioDto } from "../../repository/interface";
import { UsuarioRepository } from "../../repository/respository";

class AuthUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({  next, email, password }: UsuarioUpdateUsuarioDto) {
        

        const userExist = await this.usuarioRepository.findByEmail(email!)

        if (!userExist) {
            return next(new ServerError('Email ou palavra passe incorrectas', 400))
        }

         compare(userExist.password, password!, (err, result) => {
            if (err) {
                return next(new ServerError('Email ou palavra passe incorrectas', 400))
            }
         })


         return true
        
        
        // if (password) {
        //     data.password = await hash( password! , 8);
        // }

        // return await this.usuarioRepository.update({ next, ...data})

    }
}

export { AuthUsuarioUseCase };
