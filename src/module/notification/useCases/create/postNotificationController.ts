import { PostNotificationUseCase } from "./postNotificationUseCase"
import { Request, Response  } from "express"

class PostNotificationController {
    constructor(private postNotificationUseCase: PostNotificationUseCase) {}

    async handle(req: Request, res: Response){
        const data = req.body
        try {
            // validar os valores
            await this.postNotificationUseCase.execute(data)
            
        } catch (error: any) {
            return res.status(error.status).json({ message: error.message})
        }
    }
}

export { PostNotificationController }
