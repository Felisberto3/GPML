import { ServerError } from "../../../../error/index";
import { shema } from "../../../../services/yup";
import { PostUsuarioUseCase } from "./postUsuarioUseCase";
import { NextFunction, Request, Response } from "express";
import { payloadGenerator } from "../../../../services/payload";

class PostUsuarioController {
    constructor(private postUsuarioUseCase: PostUsuarioUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { email, password, nomeCompleto } = req.body

        try {
            await shema.validate({ email, password, nomeCompleto })

        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }

        const usuario = await this.postUsuarioUseCase.execute({ email, password, nomeCompleto, next })

        if (!usuario) {
           return next(new ServerError('Usuario não existe', 500))
        }

        const payload = payloadGenerator(usuario.id, email)

        return res.status(201).json({
            usuario,
            payload
        })
    }
}

export { PostUsuarioController }