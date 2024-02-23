import { NextFunction, Router, Request, Response } from "express"
import { postAgenciados } from "../module/agenciados/useCases/postAgenciados"
import { getAgenciados } from "../module/agenciados/useCases/getAgenciados"
import { deleteAgenciados } from "../module/agenciados/useCases/deleteAgenciados"
import { authUser } from "../midleware/authUser"

const agenciadosRouter = Router()

agenciadosRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postAgenciados.handle(req,res, next)
})

agenciadosRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getAgenciados.handle(req,res, next)
})
agenciadosRouter.delete('/delete/:id', authUser, async (req: Request, res:Response, next: NextFunction)=>{
    return await deleteAgenciados.handle(req,res, next)
})
export { agenciadosRouter }