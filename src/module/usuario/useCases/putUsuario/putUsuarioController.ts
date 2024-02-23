import { ServerError } from "../../../../error/index";
import { shema, updateUsuarioSchema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { PutUsuarioUseCase } from "./putUsuarioUseCase";

class PutUsuarioController {
    constructor(private putUsuarioUseCase: PutUsuarioUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { userId } = req.body
        
        if (!userId) {
            return next(new ServerError('usuario id é obrigatório', 400))
        }


        try {
            
            await updateUsuarioSchema.validate(req.body)

            const result = await this.putUsuarioUseCase.execute({
                ...req.body,
                next
            })
            return res.status(201).json(result)

        } catch (err: any) {

            return res.status(400).json({ message: "Campos incorrectos" })
        }





    }
}

export { PutUsuarioController }
