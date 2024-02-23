import { ServerError } from "../../../../error/index";
import { NextFunction, Request, Response } from "express";
import { PutAgenciaUseCase } from "./putAgenciaUseCase";
import { updateAgenciaSchema } from "../../../../services/yup";

class PutAgenciaController {
    constructor(private putAgenciaUseCase: PutAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        if (!Number(id)) {
            return next(new ServerError('Agencia id é obrigatório', 400))
        }


        try {
            
            await updateAgenciaSchema.validate(req.body)

            const result = await this.putAgenciaUseCase.execute({
                ...req.body,
                id: Number(id),
            })
            return res.status(201).json(result)

        } catch (err: any) {
            console.log(err);

            return res.status(400).json({ message: err.message })
        }





    }
}

export { PutAgenciaController }
