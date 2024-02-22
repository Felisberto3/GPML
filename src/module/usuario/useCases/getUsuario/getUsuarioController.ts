import { ServerError } from "../../../../error/index";
import { Request, Response } from "express";
import { GetUsuarioUseCase } from "./getUsuarioUseCase";

class GetUsuarioController {
    constructor(private getUsuarioUseCase: GetUsuarioUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        if (!Number(id)) throw new ServerError('Data types invalid', 400)

        const usuario = await this.getUsuarioUseCase.execute(Number(id))

        return res.status(200).json({ usuario })
    }
}

export { GetUsuarioController }