import { authSchema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { AuthUsuarioUseCase } from "./authUsuarioUseCase";

class AuthUsuarioController {
    constructor(private authUsuarioUseCase: AuthUsuarioUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            
            await authSchema.validate(req.body)

            const result = await this.authUsuarioUseCase.execute({
                ...req.body,
                next
            })
            return res.status(201).json(result)

        } catch (err: any) {

            return res.status(400).json({ message: err.message })
        }

    }
}

export { AuthUsuarioController }
