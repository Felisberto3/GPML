import { ServerError } from "../../../../error/index";
import { AgenciaRepository } from "../../repository/respository";
import { AgenciaUpdateDto } from "../../repository/interface";

class PutAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ id, userId:administradorId, ...data }: AgenciaUpdateDto) {
        
        const antigaAgencia = await this.agenciaRepository.finByAdminId(administradorId!)

        if (antigaAgencia?.id !== id) {
            throw new ServerError('Apenas o proprietario pode mudar esta agencia', 400)
        }
        

        return await this.agenciaRepository.update({ id , ...data})

    }
}

export { PutAgenciaUseCase };
