
import { ServerError } from "../../../../error/index"
import { NotificacaoRepository } from "../../repository/respository"

class GetNotificacaoUseCase {
    constructor(private notificacaoRepository: NotificacaoRepository) { }

    async execute(id: number) {

        try {
            return  await this.notificacaoRepository.findById(id)
        } catch (error: any) {
            throw new ServerError(error.message, 400)
        }
    }
}

export { GetNotificacaoUseCase }