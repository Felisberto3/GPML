import {  Agencia } from "@prisma/client";
import { prisma } from "../../../prismaConfig/index";
import { AgenciaRepositoryTDO, AgenciaUpdateDto, AgenciacreateDto } from "./interface";

class AgenciaRepository implements AgenciaRepositoryTDO {
    constructor() { }

    async create({next, ...data }: AgenciacreateDto): Promise<Agencia> {

        const Agencia = await prisma.agencia.create({ data })

        return Agencia
    }
    
    async findById(id: number | null): Promise<Agencia | Agencia[] |null> {

        if (!id) {
            return await prisma.agencia.findMany()
        }
        return await prisma.agencia.findFirst({ where: { id } })
    }

     async findByEmail(nome: string): Promise<Agencia | null> {
        return await prisma.agencia.findUnique({ where: { nome }})
    }

    async update({ id,next, ...data}: AgenciaUpdateDto): Promise<boolean> {
        
        await prisma.agencia.update({
            where: { id },
            data:  data 
        })
        return true
    }
}

export { AgenciaRepository }