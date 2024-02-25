
import { AgenciaRepository } from "../../repository/respository"

class FilterAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute({ nome }:{ nome: string }) {
        return await this.agenciaRepository.filterAgencia( nome )
    }
}

export { FilterAgenciaUseCase }