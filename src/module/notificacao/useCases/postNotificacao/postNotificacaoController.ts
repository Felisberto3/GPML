import { ServerError } from "../../../../error/index";
import { notificacaoShema, shema } from "../../../../services/yup";
import { PostNotificacaoUseCase } from "./postNotificacaoUseCase";
import { NextFunction, Request, Response } from "express";

class PostNotificacaoController {
    constructor(private postNotificacaoUseCase: PostNotificacaoUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            await notificacaoShema.validate(req.body)

            const notificacao = await this.postNotificacaoUseCase.execute({ ...req.body })

            return res.status(201).json(notificacao)
        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }
    }
}

export { PostNotificacaoController }