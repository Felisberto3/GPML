import { hash } from "bcrypt";
import { ServerError } from "../../../../error/index";

import { NotificacaoRepository } from "../../repository/respository";
import { createNotificacaoDto } from "module/notificacao/repository/interface";

class PostNotificacaoUseCase {
    constructor(private NotificacaoRepository: NotificacaoRepository) { }

    async execute({ next, ...data}: createNotificacaoDto) {
        try {

        } catch (error:any) {
         
        }
    }
}

export { PostNotificacaoUseCase };
