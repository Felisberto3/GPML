import { Router, Response, Request } from "express";
import { postUsuario } from "../module/usuario/useCases/postUsuario/index";
import { getUsuario } from "../module/usuario/useCases/getUsuario";

const usuarioRouter = Router()

usuarioRouter.post('/create', (req: Request, res:Response)=>{
    return postUsuario.handle(req,res)
})

usuarioRouter.get('/get/:id', (req: Request, res:Response)=>{
    return getUsuario.handle(req,res)
})
export { usuarioRouter }