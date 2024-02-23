import { $Enums, Notificacao } from "@prisma/client";
import { prisma } from "../../../prismaConfig/index";
import { NotificacaoRepositoryTDO, createNotificacaoDto } from "./interface";

class NotificacaoRepository implements NotificacaoRepositoryTDO {
    constructor() { }

    async create({ next, ...data }: createNotificacaoDto): Promise<Notificacao> {

        const Notificacao = await prisma.notificacao.create({ data })

        return Notificacao
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

    async findBydestinatarioId(id: number): Promise<Notificacao | Notificacao[] | null> {
        return await prisma.notificacao.findMany({ where: { id } })

    }
}

export { NotificacaoRepository }