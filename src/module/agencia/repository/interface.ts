import { Agencia } from "@prisma/client";
import { NextFunction } from "express";

interface AgenciacreateDto {
    nome: string;
    slogam: string;
    imagem: string;
    sobre: string;
    administradorId: number; 
    next: NextFunction
}
interface AgenciaUpdateDto {
    id: number;
    nome?: string;
    slogam?: string;
    imagem?: string;
    sobre?: string;
    administradorId?: number;
    next: NextFunction
}
interface AgenciaRepositoryTDO {
    create(data: AgenciacreateDto): Promise<Agencia>
    findById(id: number): Promise<Agencia | Agencia[] | null>
    findByEmail(email: string): Promise<Agencia | null>
    update(data: AgenciaUpdateDto): Promise<boolean>
}

export { AgenciacreateDto, AgenciaRepositoryTDO, AgenciaUpdateDto }