import { z } from 'zod'
import { postSchema } from './postEntity'
import { PostEntity } from './postEntity'

export type IPostDto = z.infer<typeof postSchema>
export type INewPostDto = Omit<IPostDto, 'id'> & { id?: string }

export type ICreatePostRequestDto = Omit<IPostDto, 'id'>

export interface IPostRepository {
  findById: (id: string) => PostEntity | null
  create: (post: PostEntity) => void
  update: (post: PostEntity) => void
  delete: (post: PostEntity) => void
}
