import {  ModeloCaracteristica } from "@prisma/client";
import { CreateModeloCaracteristicaDto, ModeloCaracteristicaRepositoryTDO, UpdateModeloCaracteristicaDto } from "./interface";
import { prisma } from "../../../prismaConfig/index";

class ModeloCaracteristicaRepository implements ModeloCaracteristicaRepositoryTDO {
    constructor() { }

    async create({ next,...data }: CreateModeloCaracteristicaDto): Promise<ModeloCaracteristica> {

        const ModeloCaracteristica = await prisma.modeloCaracteristica.create({ data })

        return ModeloCaracteristica
    }
    
    async findByModeloId(modeloId: number | null): Promise<ModeloCaracteristica | ModeloCaracteristica[] |null> {

        if (!modeloId) {
            return await prisma.modeloCaracteristica.findMany()
        }
        return await prisma.modeloCaracteristica.findFirst({ where: { modeloId } })
    }



    async update({ id,next, ...data}: UpdateModeloCaracteristicaDto ): Promise<boolean> {
        
        await prisma.modeloCaracteristica.update({
            where: { id },
            data:  data 
        })
        return true
    }
}

export { ModeloCaracteristicaRepository }