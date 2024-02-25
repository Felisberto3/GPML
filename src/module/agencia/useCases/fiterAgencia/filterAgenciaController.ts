import { NextFunction, Request, Response } from "express";
import { FilterAgenciaUseCase } from "./filterAgenciaUseCase";


class FilterAgenciaController {
    constructor(private filterAgenciaUseCase: FilterAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { nome } = req.params

        const agencia = await this.filterAgenciaUseCase.execute({  nome })

        return res.status(200).json(agencia)
    }
}

export { FilterAgenciaController }