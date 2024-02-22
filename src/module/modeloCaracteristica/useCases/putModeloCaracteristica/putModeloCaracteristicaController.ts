import { ServerError } from "../../../../error/index";
import {  updateModeloCaracteristicaSchema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { PutModeloCaracteristicaUseCase } from "./putModeloCaracteristicaUseCase";

class PutModeloCaracteristicaController {
    constructor(private putModeloCaracteristicaUseCase: PutModeloCaracteristicaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        if (!Number(id)) {
            return next(new ServerError('ModeloCaracteristica id é obrigatório', 400))
        }


        try {
            
            // await updateModeloCaracteristicaSchema.validate(req.body)
            console.log('yaya');
            
            return
            const result = await this.putModeloCaracteristicaUseCase.execute({
                ...req.body,
                id: Number(id),
                next
            })
            return res.status(201).json(result)

        } catch (err: any) {
            console.log(err);

            return res.status(400).json({ message: "Campos incorrectos" })
        }





    }
}

export { PutModeloCaracteristicaController }
