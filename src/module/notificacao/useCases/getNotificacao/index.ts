import { NotificacaoRepository } from "../../repository/respository"
import { GetNotificacaoController } from "./getNotificacaoController"
import { GetNotificacaoUseCase } from "./getNotificacaoUseCase"

const notificacaoRepository = new NotificacaoRepository()
const getNotificacaoUseCase = new GetNotificacaoUseCase(notificacaoRepository)
const getNotificacao = new GetNotificacaoController(getNotificacaoUseCase)

export { getNotificacao }