
import { PostRepository } from "../../repository/respository"

class GetPostImgUseCase {
    constructor(private PostRepository: PostRepository) { }

    async execute(id: number | null) {

        return  await this.PostRepository.findById(id)
    }
}

export { GetPostImgUseCase }