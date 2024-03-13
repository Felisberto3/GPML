import { PostNotificationUseCase } from "./postNotificationUseCase"
import { notificacaoShema } from '../../../../services/yup'
import { Request, Response  } from "express"

class PostNotificationController {
    constructor(private postNotificationUseCase: PostNotificationUseCase) {}

    async handle(req: Request, res: Response){
        const data = req.body
        try {
            await notificacaoShema.validate(data)
            
           const resp =  await this.postNotificationUseCase.execute(data)

           return res.status(201).json(resp)
            
        } catch (error: any) {
            return res.status(error.status).json({ message: error.message})
        }
    }
}

export { PostNotificationController }
