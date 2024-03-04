import { Request, Response } from "express";
import { GetPostImgUseCase } from './getPostImgUseCase'

class GetPostImgController {
    constructor(private getPostImgUseCase: GetPostImgUseCase) { }

    async handle(req: Request, res: Response) {
        const { id } = req.params

        const PostImg = await this.getPostImgUseCase.execute(Number(id))

        return res.status(200).json(PostImg )
    }
}

export { GetPostImgController }