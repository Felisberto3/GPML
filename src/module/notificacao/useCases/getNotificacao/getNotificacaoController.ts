import { NextFunction, Request, Response } from "express";
import { GetNotificacaoUseCase } from "./getNotificacaoUseCase";

class GetNotificacaoController {
    constructor(private getNotificacaoUseCase: GetNotificacaoUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params


        try {
            const notificacao = await this.getNotificacaoUseCase.execute(Number(id))

            return res.status(200).json(notificacao)
        } catch (error: any ) {
            return res.status(error.status).json(error.message)
        }
    }
}

export { GetNotificacaoController }