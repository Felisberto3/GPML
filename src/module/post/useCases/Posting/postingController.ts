import { PostingUseCase } from "./PostingUseCase";
import { Request, Response  } from "express";



class PostingController {
    constructor(private postingUseCase: PostingUseCase) { }

    async handle(req: Request, res: Response) {
        const data = req.body
        try {
            return await this.postingUseCase.execute(data);

        } catch (error: any) {
            return res.status(error.status).json({ message: error.message })
        }
    }
}

export { PostingController };
