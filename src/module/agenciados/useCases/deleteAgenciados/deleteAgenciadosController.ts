import { ServerError } from "../../../../error/index";
import { NextFunction, Request, Response } from "express";
import { DeleteAgenciadosUseCase } from "./deleteAgenciadosUseCase";

class DeleteAgenciadosController {
    constructor(private deleteAgenciadosUseCase: DeleteAgenciadosUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        const { id } = req.params

        const { userId } = req.body


        if (!Number(id)) {
            return next(new ServerError('Agenciados id é obrigatório', 400))
        }

        try {

            const result = { }
            return res.status(201).json(req.body)

        } catch (err: any) {
            console.log(err);

            return res.status(400).json({ message: "Campos incorrectos" })
        }





    }
}

export { DeleteAgenciadosController }
