import { ServerError } from "../../../../error/index";
import { shema, updateUsuarioSchema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { PutUsuarioUseCase } from "./putUsuarioUseCase";

class PutUsuarioController {
    constructor(private putUsuarioUseCase: PutUsuarioUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        if (!Number(id)) {
            return next(new ServerError('usuario id é obrigatório', 400))
        }


        try {
            await updateUsuarioSchema.validate(req.body)

            const result = await this.putUsuarioUseCase.execute({
                ...req.body,
                id: Number(id),
                next
            })
            return res.status(201).json(result)

        } catch (err: any) {
            console.log(err.message);

            return res.status(400).json({ message: "Campos incorrectos" })
        }





    }
}

export { PutUsuarioController }
