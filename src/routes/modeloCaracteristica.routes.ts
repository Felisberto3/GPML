import { NextFunction, Router, Request, Response } from "express";
import { postModeloCaracteristica } from "../module/modeloCaracteristica/useCases/postModeloCaracteristica/index";

const modeloCaracteristicaRouter = Router()

modeloCaracteristicaRouter.post('/create', async ( req:Request, res: Response, next: NextFunction) =>{
    return await postModeloCaracteristica.handle(req, res, next)
})

export { modeloCaracteristicaRouter }