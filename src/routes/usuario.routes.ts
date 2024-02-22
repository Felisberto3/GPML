import { Router, Response, Request, NextFunction } from "express";
import { postUsuario } from "../module/usuario/useCases/postUsuario/index";
import { getUsuario } from "../module/usuario/useCases/getUsuario";
import { putUsuario } from "../module/usuario/useCases/putUsuario";

const usuarioRouter = Router()

usuarioRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postUsuario.handle(req,res, next)
})

usuarioRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getUsuario.handle(req,res, next)
})
usuarioRouter.put('/put/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await putUsuario.handle(req,res, next)
})
export { usuarioRouter }