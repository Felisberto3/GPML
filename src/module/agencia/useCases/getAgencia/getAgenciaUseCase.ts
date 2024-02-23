
import { AgenciaRepository } from "../../repository/respository"

class GetAgenciaUseCase {
    constructor(private agenciaRepository: AgenciaRepository) { }

    async execute(id: number | null) {
        // if (nome) {
        //     return await this.agenciaRepository.findByName(nome)
        // }
        return  await this.agenciaRepository.findById(id)
    }
}

export { GetAgenciaUseCase }