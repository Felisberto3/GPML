import { ServerError } from "../../../../error/index";
import { NextFunction, Request, Response } from "express";
import { GetAgenciadosUseCase } from "./getAgenciadosUseCase";

class GetAgenciadosController {
    constructor(private getAgenciadosUseCase: GetAgenciadosUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        const agenciados = await this.getAgenciadosUseCase.execute(Number(id))

        return res.status(200).json(agenciados )
    }
}

export { GetAgenciadosController }