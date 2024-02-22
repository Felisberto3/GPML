import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";

const router = Router()

router.use('/usuario', usuarioRouter)

export { router }