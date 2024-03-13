import { Notification } from "@prisma/client";
import { createNotificationDTO, notificationRepositoryDTO } from "./interface";
import { prisma } from "../../../prismaConfig";

class NotificationRepository implements notificationRepositoryDTO {
    async create(data: createNotificationDTO): Promise<Notification> {
        return await prisma.notification.create({ data })
    }
    async find(): Promise<Notification[]> {
        return await prisma.notification.findMany()
    }
    async findById(id: number): Promise<Notification | null> {
        return await prisma.notification.findFirst({ where:{ id } })
    }
}

export { NotificationRepository }