import { Router, Response, Request } from "express";
import { Posting } from "../module/post/useCases/Posting";
import { authUser } from "../midleware/authUser";
import { upload } from "../midleware/multer";


const postRouter = Router()

postRouter.post('/create',authUser, async (req: Request, res: Response) => {
    return await Posting.handle(req, res)
})

postRouter.post('/upload', upload.single('files'), (req, res) => {
    // Retorna uma resposta adequada após o upload
    res.send('Arquivo enviado com sucesso!');
});

// postRouter.get('/get/:id', async (req: Request, res: Response) => {
//     return await getpost.handle(req, res)
// })

// postRouter.put('/create-postdo', async (req: Request, res: Response) => {
//     return await createpostdo.handle(req, res)
// })



export { postRouter }