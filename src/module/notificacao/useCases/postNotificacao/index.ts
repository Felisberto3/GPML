import { NotificacaoRepository } from "../../repository/respository"
import { PostNotificacaoController } from "./postNotificacaoController"
import { PostNotificacaoUseCase } from "./postNotificacaoUseCase"

const notificacaoRepository = new NotificacaoRepository()
const postNotificacaoUseCase = new PostNotificacaoUseCase(notificacaoRepository)
const postNotificacao = new PostNotificacaoController(postNotificacaoUseCase)

export { postNotificacao }