import { ModeloCaracteristica } from "@prisma/client";
import { UpdateModeloCaracteristicaDto } from "../../repository/interface";
import { ModeloCaracteristicaRepository } from "../../repository/respository";
import { ServerError } from "../../../../error/index";

class PutModeloCaracteristicaUseCase {
    constructor(private modeloCaracteristicaRepository: ModeloCaracteristicaRepository) { }

    async execute({ id, next, ...data }: UpdateModeloCaracteristicaDto) {
        
        let modelo = await this.modeloCaracteristicaRepository.findByModeloId(id) as ModeloCaracteristica
        
        if (!modelo.id) {
           return next(new ServerError('Não exite usuario com este id', 450))
        }   
        
        id = modelo.id
        return await this.modeloCaracteristicaRepository.update({ id, next, ...data})

    }
}

export { PutModeloCaracteristicaUseCase };
