import { Router, Response, Request } from "express";
import { postUsuario } from "../module/usuario/useCases/postUsuario/index";

const usuarioRouter = Router()

usuarioRouter.post('/create', (req: Request, res:Response)=>{
    return postUsuario.handle(req,res)
})
export { usuarioRouter }