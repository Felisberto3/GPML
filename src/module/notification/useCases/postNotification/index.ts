import { PostRepository } from "../../repository/respository"
import { PostingUseCase } from "./PostingUseCase"
import { PostingController } from "./postingController"


const postRepository = new PostRepository()
const postingUseCase = new PostingUseCase(postRepository)
const Posting = new PostingController(postingUseCase)

export { Posting }