import express from 'express'
import * as controllers from './controllers/api'

export const postRouter = express.Router()

const findPostApiController = controllers.makeFindPostApiController()
const createPostApiController = controllers.makeCreatePostApiController()
const deletePostApiController = controllers.makeDeletePostApiController()
const publishPostApiController = controllers.makePublishPostApiController()

postRouter.get(
  '/posts/:id',
  findPostApiController.handle.bind(findPostApiController)
)

postRouter.post(
  '/posts/',
  createPostApiController.handle.bind(createPostApiController)
)

postRouter.patch(
  '/posts/:id/publish',
  publishPostApiController.handle.bind(publishPostApiController)
)

postRouter.delete(
  '/posts/:id',
  deletePostApiController.handle.bind(deletePostApiController)
)
