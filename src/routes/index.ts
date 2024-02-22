import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";

const router = Router()

router.use('/usuarios', usuarioRouter)

export { router }