import { InMemoryPostReposistory } from '../postRepository'
import { FindPostUseCase } from './findPostUseCase'
import { CreatePostUseCase } from './createPostUseCase'
import { PublishPostUseCase } from './publishPostUseCase'
import { DeletePostUseCase } from './deletePostUseCase'

const inMemoryPostRepository = new InMemoryPostReposistory()

export const makeFindPostUseCase = () =>
  new FindPostUseCase(inMemoryPostRepository)

export const makeCreatePostUseCase = () =>
  new CreatePostUseCase(inMemoryPostRepository)

export const makePublishPostUseCase = () =>
  new PublishPostUseCase(inMemoryPostRepository)

export const makeDeletePostUseCase = () =>
  new DeletePostUseCase(inMemoryPostRepository)
