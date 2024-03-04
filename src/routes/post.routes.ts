import { Router, Response, Request } from "express";
import { Posting } from "../module/post/useCases/Posting";
import { authUser } from "../midleware/authUser";
import { upload } from "../midleware/multer";
import { getPost } from "../module/post/useCases/getPost";


const postRouter = Router()

postRouter.post('/upload',authUser,upload.single('file'), async (req: Request, res: Response) => {
    return await Posting.handle(req, res)
})

postRouter.get('/get/:id',authUser, async (req: Request, res: Response) => {
    return await getPost.handle(req, res)
}) 






export { postRouter }