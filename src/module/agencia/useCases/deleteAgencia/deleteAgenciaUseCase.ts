import { ServerError } from "../../../../error/index";
import { AgenciaRepository } from "../../repository/respository";
import { AgenciaUpdateDto } from "../../repository/interface";

class DeleteAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute(id: number, userId: number) {

        const agencia = await this.agenciaRepository.findById(id)

        if (!agencia) {
            throw new ServerError('Não existe esta agencia', 400)
        }
        
        const agencias = await this.agenciaRepository.finByAdminId(userId)

        const result = agencias?.find(agencia => agencia.id == id)

        if (!result) {
            throw new ServerError('Apenas o proprietario pode mudar esta agencia', 400)
        }

        try {
            return await this.agenciaRepository.delete(id)
        } catch (error: any) {
            throw new ServerError(error.message, 400)
        }

    }
}

export { DeleteAgenciaUseCase };
