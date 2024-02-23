import { $Enums, Agenciados } from "@prisma/client";
import { prisma } from "../../../prismaConfig/index";
import { AgenciadosRepositoryTDO, createAgenciadosDto } from "./interface";

class AgenciadosRepository implements AgenciadosRepositoryTDO {
    constructor() { }

    async create({ next, ...data}: createAgenciadosDto): Promise<Agenciados> {

        return await prisma.agenciados.create({ data })

    }

    async findById(id: number | null): Promise<Agenciados | Agenciados[] | null> {

        if (!id) {
            return await prisma.agenciados.findMany()
        }
        return await prisma.agenciados.findFirst({ where: { id } })
    }


    async findByagenciaId(agencia_id: number): Promise<Agenciados[] | null> {
        return await prisma.agenciados.findMany({ where: { agencia_id }})
    }
    async delete(id: number): Promise<boolean> {
        await prisma.agenciados.delete({ where: { id }})
        return true
    }
}

export { AgenciadosRepository }