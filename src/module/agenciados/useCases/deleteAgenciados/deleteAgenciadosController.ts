import { ServerError } from "../../../../error/index";
import { NextFunction, Request, Response } from "express";
import { DeleteAgenciadosUseCase } from "./deleteAgenciadosUseCase";

class DeleteAgenciadosController {
    constructor(private deleteAgenciadosUseCase: DeleteAgenciadosUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id:agenciadosId } = req.params
        const { userId } = req.body

        if (!Number(agenciadosId)) {
            return next(new ServerError('Agenciados id é obrigatório', 400))
        }

        try {
            const result = await this.deleteAgenciadosUseCase.execute(Number(agenciadosId), userId)
            return res.status(201).json(result)

        } catch (err: any) {

            return res.status(400).json({ message: err.message })
        }





    }
}

export { DeleteAgenciadosController }
