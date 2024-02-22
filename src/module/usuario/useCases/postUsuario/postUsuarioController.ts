import { ServerError } from "../../../../error/index";
import { shema } from "../../../../services/yup";
import { PostUsuarioUseCase } from "./postUsuarioUseCase";
import { Request, Response } from "express";
import { payloadGenerator } from "../../../../services/payload";

class PostUsuarioController {
    constructor(private postUsuarioUseCase: PostUsuarioUseCase) { }

    async handle(req: Request, res: Response) {
        const { email, password, nomeCompleto } = req.body

        try {
            await shema.validate({ email, password, nomeCompleto })

        } catch (err) {
            console.log(err);
            
            throw new ServerError('Data types invalid', 400)
        }

        const newUsuario = await this.postUsuarioUseCase.execute({ email, password, nomeCompleto })
        const payload = payloadGenerator(newUsuario.id, email)

        return res.status(201).json({
            newUsuario,
            payload
        })
    }
}

export { PostUsuarioController }