import { ServerError } from "../../../../error/index";

import { AgenciaRepository } from "../../repository/respository";
import { AgenciacreateDto } from "module/agencia/repository/interface";

class PostAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ nome, ...data }: AgenciacreateDto) {
        const agenciaExist = await this.agenciaRepository.findByName(nome);

        if (agenciaExist) {
            throw new ServerError("Nome desta agencia já existe ", 450)
        }

        try {
            return await this.agenciaRepository.create({ nome, ...data });
        } catch (error) {
            throw new ServerError('Erro ao criar agencia', 4001)
        }
    }
}

export { PostAgenciaUseCase };
