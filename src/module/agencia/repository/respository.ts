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

    async filterAgencia(params: string): Promise<Agencia[] | null>{
        return await prisma.agencia.findMany({
            where:{
                nome:{
                    contains:params
                }
            },
            include:{
                Agenciados:true,
                usuario: true
            }
        })
    }

    async finByAdminId(administradorId: number): Promise<Agencia[] | null>{
        return await prisma.agencia.findMany({ where: { administradorId } })
    }

    async update({ id, userId,...data}: AgenciaUpdateDto): Promise<boolean> {
        
        await prisma.agencia.update({
            where: { id },
            data:  data 
        })
        return true
    }

    async delete(id: number): Promise<boolean | null> {
         await prisma.agencia.delete({
            where: { id }
        })

        return true
    }
}

export { AgenciaRepository }