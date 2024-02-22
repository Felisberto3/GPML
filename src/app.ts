import express, { Request, Response, NextFunction} from 'express'
import cors from 'cors'
import { ServerError } from './error/index'
import { router } from './routes/index'

const app = express()
app.use(cors())
app.use(express.json())

app.use(router)

app.use((err: Error, req:Request, res:Response, next:NextFunction )=>{
    if (err instanceof ServerError ) {
        return res.status(err.status).json(err.message)
    }

    return res.status(500).json({ message: 'error server'})
})



export { app }