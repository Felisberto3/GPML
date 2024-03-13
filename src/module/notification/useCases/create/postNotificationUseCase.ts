import { ServerError } from "../../../../error";
import { createNotificationDTO } from "../../repository/interface";
import { NotificationRepository } from "../../repository/respository";

class PostNotificationUseCase {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(data: createNotificationDTO ){
        try {
            await this.notificationRepository.create(data)
        } catch (error) {
            throw new ServerError('Falha ao criar notificacao', 401)
        }
    }
}

export { PostNotificationUseCase }