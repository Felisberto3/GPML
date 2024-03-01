import { Router, Response, Request } from "express";
import { Posting } from "../module/post/useCases/Posting";
import { authUser } from "../midleware/authUser";


const postRouter = Router()

postRouter.post('/create',authUser, async (req: Request, res: Response) => {
    return await Posting.handle(req, res)
})

// postRouter.get('/get/:id', async (req: Request, res: Response) => {
//     return await getpost.handle(req, res)
// })

// postRouter.put('/create-postdo', async (req: Request, res: Response) => {
//     return await createpostdo.handle(req, res)
// })



export { postRouter }