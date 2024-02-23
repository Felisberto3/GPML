import { agenciaShema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { PostAgenciaUseCase } from "./postAgenciaUseCase";

class PostAgenciaController {
    constructor(private postAgenciaUseCase: PostAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            
            await agenciaShema.validate(req.body)

            const agencia = await this.postAgenciaUseCase.execute({ ...req.body})

            return res.status(201).json( agencia )

        } catch (err: any) {
            return res.status(err.status).json({message: err.message})
        }
    }
}

export { PostAgenciaController }