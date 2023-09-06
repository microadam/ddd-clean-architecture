import * as useCases from '../../useCases'

import { FindPostApiController } from './findPostApiController'
import { CreatePostApiController } from './createPostApiController'
import { PublishPostApiController } from './publishPostApiController'
import { DeletePostApiController } from './deletePostApiController'

export const makeFindPostApiController = () =>
  new FindPostApiController(useCases.makeFindPostUseCase())

export const makeCreatePostApiController = () =>
  new CreatePostApiController(useCases.makeCreatePostUseCase())

export const makePublishPostApiController = () =>
  new PublishPostApiController(useCases.makePublishPostUseCase())

export const makeDeletePostApiController = () =>
  new DeletePostApiController(useCases.makeDeletePostUseCase())
