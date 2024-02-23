import { $Enums, Notificacao } from "@prisma/client";
import { prisma } from "../../../prismaConfig/index";
import { NotificacaoRepositoryTDO, createNotificacaoDto } from "./interface";

class NotificacaoRepository implements NotificacaoRepositoryTDO {
    constructor() { }

    async create({ next, agenciaId: agencia_id,...data }: createNotificacaoDto): Promise<Notificacao> {
        return await prisma.notificacao.create({ data: { agencia_id, ...data} })
    }

    async findById(id: number | null): Promise<Notificacao | Notificacao[] | null> {

        if (!id) {
            return await prisma.notificacao.findMany()
        }
        return await prisma.notificacao.findFirst({
            where: { id }
        })
    }


    async findByAgenciaId(id: number): Promise<Notificacao[] | null> {
        return await prisma.notificacao.findMany({ where: { id } })
    }

    async findBydestinatarioId(destinatarioId: number, AgenciaId: number): Promise<Notificacao | Notificacao[] | null> {
        if (AgenciaId) {
            return await prisma.notificacao.findMany({
                where: { destinatarioId, AND:{ agencia_id: AgenciaId }  }
            })
        }
        return await prisma.notificacao.findMany({ where: { destinatarioId } })
    }
}

export { NotificacaoRepository }