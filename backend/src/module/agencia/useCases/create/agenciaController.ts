import { Request, Response } from "express"
import { AgenciaUseCase } from "./agenciaUseCase"
import { agenciaShema } from "../../../../services/yup"

class AgenciaController {
    constructor(private agenciaUseCase: AgenciaUseCase) { }

    async handle(req: Request, res: Response) {
        const { email, ...data} = req.body

        try {
            agenciaShema.validate(data)
            const newAgencia = await this.agenciaUseCase.execute(data)
            return res.status(201).json(newAgencia)

        } catch (error: any) {
            return res.status(400).json({message: error.message})
        }
    }
}

export { AgenciaController }