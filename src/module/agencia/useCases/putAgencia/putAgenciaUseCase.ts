import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { AgenciaRepository } from "../../repository/respository";
import { AgenciaUpdateDto } from "module/agencia/repository/interface";

class PutAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ id, administradorId, ...data }: AgenciaUpdateDto) {
        
        const antigaAgencia = await this.agenciaRepository.finByAdminId(administradorId!)

        if (antigaAgencia?.id !== id) {
            throw new Error('Apenas o proprietario pode mudar esta agencia')
        }
        

        return await this.agenciaRepository.update({ id , ...data})

    }
}

export { PutAgenciaUseCase };
