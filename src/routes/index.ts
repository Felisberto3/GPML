import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";
import { agenciaRouter } from "./agencia.routes";
import { postRouter } from "./post.routes";


const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/agencia', agenciaRouter)
router.use('/post', postRouter)



export { router }