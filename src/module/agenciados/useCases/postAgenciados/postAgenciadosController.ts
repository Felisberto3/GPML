
import { agenciadosShema } from "../../../../services/yup";
import { PostAgenciadosUseCase } from "./postAgenciadosUseCase";
import { NextFunction, Request, Response } from "express";

class PostAgenciadosController {
    constructor(private postAgenciadosUseCase: PostAgenciadosUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {
            await agenciadosShema.validate(req.body)

            const result = await this.postAgenciadosUseCase.execute(req.body)

            res.status(201).json(result)
        } catch (err: any) {
            return res.status(400).json({message: err.message })
        }

    }
}

export { PostAgenciadosController }