import { ServerError } from "../../../../error/index";

import { AgenciaRepository } from "../../repository/respository";
import { AgenciacreateDto } from "module/agencia/repository/interface";

class PostAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ next, nome, ...data }: AgenciacreateDto) {
        const agenciaExist = await this.agenciaRepository.findByName(nome);

        if (agenciaExist) {
            // return next(new ServerError("Nome desta agencia já existe ", 401))
        }

        try {
            const ya = await this.agenciaRepository.create({ nome, ...data });
            console.log('como jnedkjnekjwn');
            
            return ya
            

        } catch (error: any) {
            return next!(new ServerError( "onde estas"+ error.message , 400))
            
        }
    }
}

export { PostAgenciaUseCase };
