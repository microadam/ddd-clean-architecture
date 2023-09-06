import { IPostRepository } from '../types'

export interface IPublishPostUseCase {
  execute: (postId: string) => Promise<void>
}

export class PublishPostUseCase implements IPublishPostUseCase {
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

    post.publish()
    await this.postRepository.update(post)
  }
}
