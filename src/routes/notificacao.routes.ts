import { NextFunction, Router, Request, Response } from "express"
import { postNotificacao } from "../module/notificacao/useCases/postNotificacao/index"
import { getNotificacao } from "../module/notificacao/useCases/getNotificacao/index"


const notificacaoRouter = Router()

notificacaoRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postNotificacao.handle(req,res, next)
})

notificacaoRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getNotificacao.handle(req,res, next)
})

export { notificacaoRouter }