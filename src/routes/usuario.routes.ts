import { Router, Response, Request, NextFunction } from "express";
import { postUsuario } from "../module/usuario/useCases/postUsuario/index";
import { getUsuario } from "../module/usuario/useCases/getUsuario";
import { putUsuario } from "../module/usuario/useCases/putUsuario";
import { authUser } from "../midleware/authUser";
import { authUsuario } from "../module/usuario/useCases/auth";

const usuarioRouter = Router()

usuarioRouter.post('/create', async (req: Request, res:Response, next: NextFunction)=>{
    return await postUsuario.handle(req,res, next)
})

usuarioRouter.post('/auth', async (req: Request, res:Response, next: NextFunction)=>{
    return await authUsuario.handle(req,res, next)
})

usuarioRouter.get('/get/:id', async (req: Request, res:Response, next: NextFunction)=>{
    return await getUsuario.handle(req,res, next)
})
usuarioRouter.put('/put', authUser, async (req: Request, res:Response, next: NextFunction)=>{
    return await putUsuario.handle(req,res, next)
})
export { usuarioRouter }