import { z } from 'zod'
import { v4 as uuidv4 } from 'uuid'
import { IPostDto, INewPostDto } from './types'

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().trim().min(1),
  published: z.boolean().default(false),
  archived: z.boolean().default(false)
})

export class PostEntity {
  private props: IPostDto

  private constructor(props: IPostDto) {
    this.props = props
  }

  public static create(props: INewPostDto): PostEntity {
    const post = postSchema.parse({ ...props, id: props.id || uuidv4() })
    return new PostEntity(post)
  }

  public static fromDto(props: IPostDto) {
    const post = postSchema.parse(props)
    return new PostEntity(post)
  }

  get id(): string {
    return this.props.id
  }

  public toDto(): IPostDto {
    // TODO: this needs to be a deep clone
    return { ...this.props }
  }

  public canBeDeleted(): boolean {
    return !this.props.published
  }

  public publish(): void {
    this.props.published = true
  }

  public archive(): void {
    if (!this.props.published) {
      throw new Error('Post must be published to be archived')
    }
    this.props.archived = true
  }
}
