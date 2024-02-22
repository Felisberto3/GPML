import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";
import { UpdateModeloCaracteristicaDto } from "../../repository/interface";
import { ModeloCaracteristicaRepository } from "../../repository/respository";

class PutModeloCaracteristicaUseCase {
    constructor(private modeloCaracteristicaRepository: ModeloCaracteristicaRepository) { }

    async execute({ id, next, ...data }: UpdateModeloCaracteristicaDto) {
        
        return await this.modeloCaracteristicaRepository.update({ id, next, ...data})

    }
}

export { PutModeloCaracteristicaUseCase };
