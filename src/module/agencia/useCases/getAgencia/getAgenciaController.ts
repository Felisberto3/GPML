import { NextFunction, Request, Response } from "express";
import { GetAgenciaUseCase } from "./getAgenciaUseCase";


class GetAgenciaController {
    constructor(private getAgenciaUseCase: GetAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        const agencia = await this.getAgenciaUseCase.execute(Number(id))

        return res.status(200).json(agencia)
    }
}

export { GetAgenciaController }