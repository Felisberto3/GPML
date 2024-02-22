import { NextFunction, Router, Request, Response } from "express";
import { postModeloCaracteristica } from "../module/modeloCaracteristica/useCases/postModeloCaracteristica/index";
import { putModeloCaracteristica } from "../module/modeloCaracteristica/useCases/putModeloCaracteristica";

const modeloCaracteristicaRouter = Router()

modeloCaracteristicaRouter.post('/create', async ( req:Request, res: Response, next: NextFunction) =>{
    return await postModeloCaracteristica.handle(req, res, next)
})

modeloCaracteristicaRouter.put('/put/:id', async ( req:Request, res: Response, next: NextFunction) =>{
    return await putModeloCaracteristica.handle(req, res, next)
})

export { modeloCaracteristicaRouter }