
import { AgenciadosRepository } from "../../repository/respository"

class GetAgenciadosUseCase {
    constructor(private AgenciadosRepository: AgenciadosRepository) { }

    async execute(id: number | null) {

        return  await this.AgenciadosRepository.findById(id)
    }
}

export { GetAgenciadosUseCase }