import { ServerError } from "../../../../error/index";
import { agenciaShema } from "../../../../services/yup";
import { NextFunction, Request, Response } from "express";
import { payloadGenerator } from "../../../../services/payload";
import { PostAgenciaUseCase } from "./postAgenciaUseCase";

class PostAgenciaController {
    constructor(private postAgenciaUseCase: PostAgenciaUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {

        try {
            await agenciaShema.validate(req.body)
            const Agencia = await this.postAgenciaUseCase.execute({next, ...req.body})

            return res.status(201).json({ Agencia })
            
        } catch (err: any) {
            return res.status(400).json({message: "Campos incorrectos"})
        }
    }
}

export { PostAgenciaController }