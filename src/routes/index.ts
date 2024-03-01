import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";
import { agenciaRouter } from "./agencia.routes";


const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/agencia', agenciaRouter)



export { router }