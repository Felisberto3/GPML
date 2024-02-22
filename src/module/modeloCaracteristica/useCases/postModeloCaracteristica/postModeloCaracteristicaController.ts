import { ServerError } from "../../../../error/index";
import { modeloCaracteristicaSchema } from "../../../../services/yup";
import { PostModeloCaracteristicaUseCase } from "./postModeloCaracteristicaUseCase";
import { NextFunction, Request, Response } from "express";

class PostModeloCaracteristicaController {
    constructor(private postModeloCaracteristicaUseCase: PostModeloCaracteristicaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            await modeloCaracteristicaSchema.validate(req.body)

            const ModeloCaracteristica = await this.postModeloCaracteristicaUseCase.execute({ next, ...req.body })

            if (!ModeloCaracteristica) {
                return next(new ServerError('ModeloCaracteristica não existe', 500))
            }
            return res.status(201).json({
                ModeloCaracteristica
            })
        } catch (err: any) {
            
            return res.status(400).json({ message: err.message })
        }



    }
}

export { PostModeloCaracteristicaController }