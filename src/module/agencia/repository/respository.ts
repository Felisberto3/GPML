import {  Agencia } from "@prisma/client";
import { prisma } from "../../../prismaConfig/index";
import { AgenciaRepositoryTDO, AgenciaUpdateDto, AgenciacreateDto } from "./interface";

class AgenciaRepository implements AgenciaRepositoryTDO {
    constructor() { }

    async create(data: AgenciacreateDto): Promise<Agencia> {
        
        return await prisma.agencia.create({ data })
        
    }
    
    async findById(id: number | null): Promise<Agencia | Agencia[] |null> {

        if (!id) {
            return await prisma.agencia.findMany()
        }
        return await prisma.agencia.findFirst({ where: { id } })
    }

     async findByName(nome: string): Promise<Agencia | null> {
        return await prisma.agencia.findUnique({ where: { nome }})
    }

    async finByAdminId(administradorId: number): Promise<Agencia | null>{
        return await prisma.agencia.findFirst({ where: { administradorId } })
    }

    async update({ id, ...data}: AgenciaUpdateDto): Promise<boolean> {
        
        await prisma.agencia.update({
            where: { id },
            data:  data 
        })
        return true
    }
}

export { AgenciaRepository }