
import { ModeloCaracteristicaRepository } from "../../repository/respository"

class GetModeloCaracteristicaUseCase {
    constructor(private modeloCaracteristicaRepository: ModeloCaracteristicaRepository) { }

    async execute(id: number | null) {

        // return  await this.modeloCaracteristicaRepository.findById(id)
    }
}

export { GetModeloCaracteristicaUseCase }