import * as useCases from '../../useCases'

import { CreatePostCliCommand } from './createPostCliCommand'
import { ViewPostCliCommand } from './viewPostCliCommand'

export const makeViewPostCliCommand = () =>
  new ViewPostCliCommand(useCases.makeFindPostUseCase())

export const makeCreatePostCliCommand = () =>
  new CreatePostCliCommand(useCases.makeCreatePostUseCase())
