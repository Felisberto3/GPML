
import { NotificationRepository } from "../../repository/respository"

class GetNotificationUseCase {
    constructor(private NotificationRepository: NotificationRepository) { }

    async execute(id: number) {
        if (!Number(id)) {
            return await this.NotificationRepository.find()
        }

        return await this.NotificationRepository.findById(id)
    }
}

export { GetNotificationUseCase }