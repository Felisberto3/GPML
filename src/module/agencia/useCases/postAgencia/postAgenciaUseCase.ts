import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";

import { AgenciaRepository } from "../../repository/respository";
import { AgenciacreateDto } from "module/agencia/repository/interface";

class PostAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ next, nome, ...data }: AgenciacreateDto) {
        const agenciaExist = await this.agenciaRepository.findByName(nome);

        if (agenciaExist) {
            return next(new ServerError("Nome desta agencia já existe ", 401))
        }

        try {
            return await this.agenciaRepository.create({ next, nome, ...data });

        } catch (error: any) {
            return next(new ServerError(error.message, 400))
            
        }
    }
}

export { PostAgenciaUseCase };
