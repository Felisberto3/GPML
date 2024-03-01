import { createAgenciaDTO } from "../../repository/interface";
import { AgenciaRepository } from "../../repository/repository";
import { AdministratorRepository } from "../../../administrator/repository/respository";

class AgenciaUseCase {
    constructor(
        private agenciaRepository: AgenciaRepository,
        private administratorRepository: AdministratorRepository) {}

    async execute(data: createAgenciaDTO) {
        const agencia =  await this.agenciaRepository.create(data) 
        await this.administratorRepository.create({ adminId: 1, agenciaId: agencia.id})

        return agencia
    }
}

export { AgenciaUseCase }