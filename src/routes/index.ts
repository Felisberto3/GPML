import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";
import { modeloCaracteristicaRouter } from "./modeloCaracteristica.routes";

const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/modeloCaracteristica', modeloCaracteristicaRouter)


export { router }