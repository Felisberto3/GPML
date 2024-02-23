import { ServerError } from "../../../../error/index";
import { NextFunction, Request, Response } from "express";
import { updateAgenciaSchema } from "../../../../services/yup";
import { DeleteAgenciaUseCase } from "./deleteAgenciaUseCase";

class DeleteAgenciaController {
    constructor(private deleteAgenciaUseCase: DeleteAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params
        const { userId } = req.body

        if (!Number(id)) { 
            return next(new ServerError('Agencia id é obrigatório', 400))
        }


        try {
            
            const result = await this.deleteAgenciaUseCase.execute(Number(id), userId)
            
            return res.status(201).json(result)

        } catch (err: any) {
            return res.status(400).json({ message: err.message })
        }





    }
}

export { DeleteAgenciaController }
