import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";

import { UsuariocreateUsuarioDto } from "../../repository/interface";
import { UsuarioRepository } from "../../repository/respository";

class PostUsuarioUseCase {
    constructor(private usuarioRepository: UsuarioRepository) { }

    async execute({ email, nomeCompleto, password,tipo, next }: UsuariocreateUsuarioDto) {
        try {
            // Verifica se o usuário já existe
            const existingUser = await this.usuarioRepository.findByEmail(email);
            if (existingUser) {
                next(new ServerError('Usuario already exists', 400))
                return
            }

            // Hash da senha
            const hashedPassword = await hash(password, 8);

            // Cria um novo usuário
            const newUser = await this.usuarioRepository.create({ email, nomeCompleto,tipo, password: hashedPassword, next });
            return newUser;
        } catch (error) {
            // Lança um erro se ocorrer algum problema
            next(new ServerError('Failed to create user', 500))
            return
        }
    }
}

export { PostUsuarioUseCase };
