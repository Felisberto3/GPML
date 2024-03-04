import { Router, Response, Request } from "express";
import { Posting } from "../module/post/useCases/Posting";
import { authUser } from "../midleware/authUser";
import { upload } from "../midleware/multer";


const postRouter = Router()

postRouter.post('/create',authUser,upload.single('file'), async (req: Request, res: Response) => {
    return await Posting.handle(req, res)
})






export { postRouter }