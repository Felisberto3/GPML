import { ServerError } from "../../../../error/index";

import { AgenciadosRepository } from "../../repository/respository";
import { createAgenciadosDto } from "../../repository/interface";

class PostAgenciadosUseCase {
    constructor(private agenciadosRepository: AgenciadosRepository) { }

    async execute({ agencia_id, usuario_id}: createAgenciadosDto) {
        try {
         return await  this.agenciadosRepository.create({agencia_id, usuario_id})
 
        } catch (error:any) {
           throw new ServerError("falha ao criar o Agenciados", 500)
        }
    }
}

export { PostAgenciadosUseCase };
