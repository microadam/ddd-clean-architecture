import { Request, Response } from 'express'
import {
  ICreatePostUseCase,
  ICreatePostRequestDto
} from '../../useCases/createPostUseCase'

export class CreatePostApiController {
  private createPostUseCase: ICreatePostUseCase

  constructor(createPostUseCase: ICreatePostUseCase) {
    this.createPostUseCase = createPostUseCase
  }

  async handle(req: Request, res: Response) {
    const createPostDto: ICreatePostRequestDto = req.body

    try {
      const postId = await this.createPostUseCase.execute(createPostDto)
      return res.json({ postId })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: (e as Error).message })
    }
  }
}
