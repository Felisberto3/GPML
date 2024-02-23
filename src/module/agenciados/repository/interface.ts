import { Agenciados } from "@prisma/client";
import { NextFunction } from "express";

interface createAgenciadosDto {
    usuario_id: number | null;
    agencia_id: number; 
    next?: NextFunction
}
interface updateAgenciadosDto {
    id: number;
    usuario_id: number | null;
    agencia_id: number | null;
    next?: NextFunction
}
interface AgenciadosRepositoryTDO {
    create(data: createAgenciadosDto): Promise<Agenciados>
    findById(id: number): Promise<Agenciados | Agenciados[] | null>
    update(data: updateAgenciadosDto): Promise<boolean>
}

export { createAgenciadosDto, AgenciadosRepositoryTDO, updateAgenciadosDto }