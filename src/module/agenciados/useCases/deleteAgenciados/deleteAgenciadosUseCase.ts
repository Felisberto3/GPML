import { AgenciaRepository } from "../../../agencia/repository/respository";
import { ServerError } from "../../../../error/index";
import { AgenciadosRepository } from "../../repository/respository";

class DeleteAgenciadosUseCase {
    constructor(
        private agenciadosRepository: AgenciadosRepository,
        private agenciaRepository: AgenciaRepository
        ) { }

    async execute(agenciadosId: number, userId: number) {
        
        const agencias = await this.agenciaRepository.finByAdminId(userId)

        const donoDaAgencia = agencias?.find(({administradorId})=> administradorId === userId)
        if(!donoDaAgencia){
            throw new ServerError('Apenas administrador da agencia pode deletar', 400)
        }
        try {
            return await this.agenciadosRepository.delete(agenciadosId)
        } catch (error: any) {
            throw new ServerError(error.message, 400)
        }

    }
}

export { DeleteAgenciadosUseCase };
