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
    findByAgenciaId(AgenciaId: number): Promise<Notificacao[] | null>
    findBydestinatarioId(destinatarioId: number, AgenciaId: number): Promise<Notificacao | Notificacao[] | null>
}

export { createNotificacaoDto, NotificacaoRepositoryTDO }