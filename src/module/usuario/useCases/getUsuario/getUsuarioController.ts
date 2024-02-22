import { ServerError } from "../../../../error/index";
import { shema } from "../../../../services/yup";
import { Request, Response } from "express";
import { payloadGenerator } from "../../../../services/payload";
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