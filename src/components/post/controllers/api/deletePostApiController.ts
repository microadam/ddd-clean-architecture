import { Request, Response } from 'express'
import { IDeletePostUseCase } from '../../useCases/deletePostUseCase'

export class DeletePostApiController {
  private deletePostUseCase: IDeletePostUseCase

  constructor(deletePostUseCase: IDeletePostUseCase) {
    this.deletePostUseCase = deletePostUseCase
  }

  async handle(req: Request, res: Response) {
    const postId = req.params.id

    try {
      await this.deletePostUseCase.execute(postId)
      return res.json({ success: true })
    } catch (e) {
      if ((e as Error).name === 'NotFound') {
        return res.sendStatus(404)
      }
      console.error(e)
      res.status(500).json({ error: (e as Error).message })
    }
  }
}
