import { MemoryCollection } from '../shared/memoryCollection'
import { PostEntity } from './postEntity'
import { IPostDto, IPostRepository } from './types'

const collection = new MemoryCollection<IPostDto>()

export class InMemoryPostReposistory implements IPostRepository {
  findById(id: string) {
    const foundPostDto = collection.findById(id)
    if (!foundPostDto) return null
    return PostEntity.fromDto(foundPostDto)
  }

  create(post: PostEntity) {
    collection.insertOne(post.toDto())
  }

  update(post: PostEntity) {
    collection.update(post.toDto())
  }

  delete(post: PostEntity) {
    collection.delete(post.toDto())
  }
}
