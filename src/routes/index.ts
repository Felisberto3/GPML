import { Router } from "express";
import { usuarioRouter } from "./usuario.routes";
import { agenciaRouter } from "./agencia.routes";
import { postRouter } from "./post.routes";
import { notificationRouter } from "./notification.routes";


const router = Router()

router.use('/usuario', usuarioRouter)
router.use('/agencia', agenciaRouter)
router.use('/notification', notificationRouter)
router.use('/post', postRouter)



export { router }