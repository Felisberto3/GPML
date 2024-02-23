import { Notificacao } from "@prisma/client";
import { NextFunction } from "express";

interface createNotificacaoDto {
    agencia_id: number | null;
    descricao: string;
    destinatarioId: number | null;
    remitenteId: number;
    next?: NextFunction
}

interface NotificacaoRepositoryTDO {
    create(data: createNotificacaoDto): Promise<Notificacao>
    findById(id: number): Promise<Notificacao | Notificacao[] | null>
    findByAgenciaId(id: number): Promise<Notificacao[] | null>
    findBydestinatarioId(id: number): Promise<Notificacao | Notificacao[] | null>
}

export { createNotificacaoDto, NotificacaoRepositoryTDO }