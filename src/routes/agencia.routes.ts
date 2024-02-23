import { NextFunction, Router, Request, Response } from "express"
import { postAgencia } from "../module/agencia/useCases/postAgencia"
import { getAgencia } from "../module/agencia/useCases/getAgencia"

const agenciaRouter = Router()

agenciaRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postAgencia.handle(req,res, next)
})

agenciaRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getAgencia.handle(req,res, next)
})
// agenciaRouter.put('/put', authUser, async (req: Request, res:Response, next: NextFunction)=>{
//     return await putAgencia.handle(req,res, next)
// })
export { agenciaRouter }