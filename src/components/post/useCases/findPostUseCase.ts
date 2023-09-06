import { IPostDto, IPostRepository } from '../types'

export interface IFindPostUseCase {
  execute: (postId: string) => Promise<IPostDto | null>
}

export class FindPostUseCase implements IFindPostUseCase {
  private postRepository: IPostRepository

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository
  }

  async execute(postId: string): Promise<IPostDto | null> {
    const foundPost = await this.postRepository.findById(postId)
    if (!foundPost) return null
    return foundPost.toDto()
  }
}
