import { Request, Response } from 'express'
import { IPublishPostUseCase } from '../../useCases/publishPostUseCase'

export class PublishPostApiController {
  private publishPostUseCase: IPublishPostUseCase

  constructor(publishPostUseCase: IPublishPostUseCase) {
    this.publishPostUseCase = publishPostUseCase
  }

  async handle(req: Request, res: Response) {
    const postId = req.params.id

    try {
      await this.publishPostUseCase.execute(postId)
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
