import { ServerError } from "../../../../error/index";
import { AgenciaRepository } from "../../repository/respository";
import { AgenciaUpdateDto } from "../../repository/interface";

class DeleteAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute(id: number, userId:number) {
        
        const antigaAgencia = await this.agenciaRepository.findById(id)

        // if (antigaAgencia?.administradorId !== id) {👀👀👀👀
        //     throw new ServerError('Apenas o proprietario pode mudar esta agencia', 400)
        // }
        

        try {
            return await this.agenciaRepository.delete(id)
        } catch (error: any) {
            throw new ServerError(error.message, 400)
        }

    }
}

export { DeleteAgenciaUseCase };
