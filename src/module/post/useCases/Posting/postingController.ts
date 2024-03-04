import { postShema } from "../../../../services/yup";
import { PostingUseCase } from "./PostingUseCase";
import { Request, Response } from "express";

class PostingController {
    constructor(private postingUseCase: PostingUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId: usuarioId, email, agenciaId, ...restData } = req.body
        
        const data = {
            usuarioId,
            img: req.file?.path,
            agenciaId: Number(agenciaId),
            ...restData
        }
        
        try {
            await postShema.validate(data)
            const newPost = await this.postingUseCase.execute({ usuarioId, ...data })

            return res.status(201).json(newPost)
        } catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    }
}

export { PostingController }