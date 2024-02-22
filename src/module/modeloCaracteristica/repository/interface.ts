import { ModeloCaracteristica } from "@prisma/client";
import { NextFunction } from "express";

interface CreateModeloCaracteristicaDto {
    apelido: string;
    altura: number;
    cintura: number;
    sapato: number;
    modeloId: number; 
    next: NextFunction
}
interface UpdateModeloCaracteristicaDto {
    id: number;
    apelido: string;
    altura: number;
    cintura: number;
    sapato: number;
    modeloId: number;
    next: NextFunction
}
interface ModeloCaracteristicaRepositoryTDO {
    create(data: CreateModeloCaracteristicaDto): Promise<ModeloCaracteristica>
    findById(id: number): Promise<ModeloCaracteristica | ModeloCaracteristica[] | null>
    update(data: UpdateModeloCaracteristicaDto): Promise<boolean>
}

export { CreateModeloCaracteristicaDto, ModeloCaracteristicaRepositoryTDO, UpdateModeloCaracteristicaDto }