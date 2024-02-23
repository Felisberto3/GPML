import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";

import { AgenciaRepository } from "../../repository/respository";
import { AgenciacreateDto } from "module/agencia/repository/interface";

class PostAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ next, nome, ...data }: AgenciacreateDto) {
        try {

            const agenciaExist = await this.agenciaRepository.findByName(nome);

            if (agenciaExist) {
                next(new ServerError("Nome desta agencia já existe ", 401))
                return
            }
            return await this.agenciaRepository.create({ next, nome, ...data });

        } catch (error: any) {
            next(new ServerError("falha ao criar o Agencia", 400))
            return
        }
    }
}

export { PostAgenciaUseCase };
