import { NextFunction, Router, Request, Response } from "express"
import { postAgenciados } from "../module/agenciados/useCases/postAgenciados"
import { getAgenciados } from "../module/agenciados/useCases/getAgenciados"

const agenciadosRouter = Router()

agenciadosRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postAgenciados.handle(req,res, next)
})

agenciadosRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getAgenciados.handle(req,res, next)
})
// agenciadosRouter.delete('/delete/:id', authUser, async (req: Request, res:Response, next: NextFunction)=>{
//     return await deleteAgencia.handle(req,res, next)
// })
export { agenciadosRouter }