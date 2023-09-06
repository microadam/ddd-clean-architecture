import { Request, Response } from 'express'
import { IFindPostUseCase } from '../../useCases/findPostUseCase'

export class FindPostApiController {
  private findPostUseCase: IFindPostUseCase

  constructor(findPostUseCase: IFindPostUseCase) {
    this.findPostUseCase = findPostUseCase
  }

  async handle(req: Request, res: Response) {
    const postId = req.params.id
    try {
      const foundPost = await this.findPostUseCase.execute(postId)
      if (!foundPost) {
        return res.sendStatus(404)
      }
      return res.json(foundPost)
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: (e as Error).message })
    }
  }
}
