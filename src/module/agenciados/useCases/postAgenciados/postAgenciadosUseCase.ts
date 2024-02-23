import { ServerError } from "../../../../error/index";

import { AgenciadosRepository } from "../../repository/respository";
import { createAgenciadosDto } from "../../repository/interface";

class PostAgenciadosUseCase {
    constructor(private agenciadosRepository: AgenciadosRepository) { }

    async execute({ agencia_id, usuario_id}: createAgenciadosDto) {
        try {
            const agencias = await this.agenciadosRepository.findByagenciaId(agencia_id)

            const alreadyExist = agencias?.find((agencia) => agencia.usuario_id === usuario_id )

            if (alreadyExist) {
                throw new ServerError('agenciado já existe', 400)
            }
        
         return await  this.agenciadosRepository.create({agencia_id, usuario_id})
 
        } catch (error:any) {
           throw new ServerError(error.message, 500)
        }
    }
}

export { PostAgenciadosUseCase };
