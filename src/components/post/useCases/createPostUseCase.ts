import { PostEntity } from '../postEntity'
import { ICreatePostRequestDto, IPostRepository } from '../types'

export interface ICreatePostUseCase {
  execute: (createPostRequestDto: ICreatePostRequestDto) => Promise<string>
}

export class CreatePostUseCase implements ICreatePostUseCase {
  private postRepository: IPostRepository

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository
  }

  async execute(createPostRequestDto: ICreatePostRequestDto): Promise<string> {
    const newPost = PostEntity.create(createPostRequestDto)
    await this.postRepository.create(newPost)
    return newPost.id
  }
}
export { ICreatePostRequestDto }
