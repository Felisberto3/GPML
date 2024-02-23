import { ServerError } from "../../../../error/index";

import { NotificacaoRepository } from "../../repository/respository";
import { createNotificacaoDto } from "module/notificacao/repository/interface";

class PostNotificacaoUseCase {
    constructor(private notificacaoRepository: NotificacaoRepository) { }

    async execute(data: createNotificacaoDto) {
        try {
            return await this.notificacaoRepository.create(data)
        } catch (error:any) {
            throw new ServerError(error, 400)
        }
    }
}

export { PostNotificacaoUseCase };
