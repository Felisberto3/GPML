import { ServerError } from "../../../../error/index";
import { updateAgenciadosDto } from "../../repository/interface";
import { AgenciadosRepository } from "../../repository/respository";

class DeleteAgenciadosUseCase {
    constructor(private AgenciadosRepository: AgenciadosRepository) { }

    async execute({ id, next, ...data }: updateAgenciadosDto) {
        

        return await this.AgenciadosRepository.update({ id, next, ...data})

    }
}

export { DeleteAgenciadosUseCase };
