import { Agenciados } from "@prisma/client";
import { NextFunction } from "express";

interface createAgenciadosDto {
    usuario_id: number | null;
    agencia_id: number; 
    next?: NextFunction
}

interface AgenciadosRepositoryTDO {
    create(data: createAgenciadosDto): Promise<Agenciados>
    findById(id: number): Promise<Agenciados | Agenciados[] | null>
    delete(id: number): Promise<boolean>
}

export { createAgenciadosDto, AgenciadosRepositoryTDO }