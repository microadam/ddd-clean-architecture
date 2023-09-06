import { OptionValues } from 'commander'

import {
  ICreatePostUseCase,
  ICreatePostRequestDto
} from '../../useCases/createPostUseCase'

export class CreatePostCliCommand {
  private createPostUseCase: ICreatePostUseCase

  constructor(createPostUseCase: ICreatePostUseCase) {
    this.createPostUseCase = createPostUseCase
  }

  async handle(options: OptionValues) {
    const createPostDto = options as ICreatePostRequestDto
    try {
      const postId = await this.createPostUseCase.execute(createPostDto)
      console.log(postId)
    } catch (e) {
      console.error((e as Error).message)
    }
  }
}
