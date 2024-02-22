import { ServerError } from "../../../../error/index";

import { ModeloCaracteristicaRepository } from "../../repository/respository";
import { CreateModeloCaracteristicaDto } from "../../repository/interface";

class PostModeloCaracteristicaUseCase {
    constructor(private modeloCaracteristicaRepository: ModeloCaracteristicaRepository) { }

    async execute({ next, ...data }: CreateModeloCaracteristicaDto) {
        try {
            const modeloAlreadyExist = await this.modeloCaracteristicaRepository.findByModeloId(data.modeloId)

            if (modeloAlreadyExist) {
                next(new ServerError(" Caracteristicas do modelo já existe", 400))
            }

            return await this.modeloCaracteristicaRepository.create({ next, ...data });
            
        } catch (error: any) {
            // Lança um erro se ocorrer algum problema
            next(new ServerError("falha ao criar o ModeloCaracteristica, talves id do modelo não existe", 500))
            return
        }
    }
}

export { PostModeloCaracteristicaUseCase };
