import { compare } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { UsuarioUpdateUsuarioDto } from "../../repository/interface";
import { UsuarioRepository } from "../../repository/respository";
import { payloadGenerator } from "../../../../services/payload";

class AuthUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({ next, email, password }: UsuarioUpdateUsuarioDto) {


        const userExist = await this.usuarioRepository.findByEmail(email!)

        if (!userExist) {
            return next(new ServerError('Email ou palavra passe incorrectas', 400))
        }

        const isEqual = await compare(password!, userExist.password)

        if (!isEqual) {
            return next(new ServerError('Email ou palavra passe incorrectas', 400))
        }

        const token = payloadGenerator(userExist.id, email!)


        return {
            usuario: userExist,
            token
        }

    }
}

export { AuthUsuarioUseCase };
