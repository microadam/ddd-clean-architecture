import { IPostRepository } from '../types'

export interface IDeletePostUseCase {
  execute: (postId: string) => Promise<void>
}

export class DeletePostUseCase implements IDeletePostUseCase {
  private postRepository: IPostRepository

  constructor(postRepository: IPostRepository) {
    this.postRepository = postRepository
  }

  async execute(postId: string): Promise<void> {
    const post = await this.postRepository.findById(postId)

    if (!post) {
      const NotFoundError = new Error('Post Not Found')
      NotFoundError.name = 'NotFound'
      throw NotFoundError
    }

    if (post.canBeDeleted()) {
      await this.postRepository.delete(post)
    } else {
      post.archive()
      await this.postRepository.update(post)
    }
  }
}
