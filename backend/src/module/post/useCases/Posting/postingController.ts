import { postShema } from "../../../../services/yup";
import { PostingUseCase } from "./postingUseCase";
import { Request, Response  } from "express";



class PostingController {
    constructor(private postingUseCase: PostingUseCase) { }

    async handle(req: Request, res: Response) {
        const { userId:usuarioId , ...data1} = req.body
        const img = req.file?.path
        const data = {usuarioId,img, ...data1}
        try {
            await postShema.validate(data)

            const resp =  await this.postingUseCase.execute(data);

            return res.status(201).json(resp)

        } catch (error: any) {
            return res.status(400).json({ message: error.message })
        }
    }
}

export { PostingController };
