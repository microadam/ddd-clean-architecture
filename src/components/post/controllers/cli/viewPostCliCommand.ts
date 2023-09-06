import { IFindPostUseCase } from '../../useCases/findPostUseCase'

export class ViewPostCliCommand {
  private findPostUseCase: IFindPostUseCase

  constructor(findPostUseCase: IFindPostUseCase) {
    this.findPostUseCase = findPostUseCase
  }

  async handle(postId: string) {
    try {
      const foundPost = await this.findPostUseCase.execute(postId)
      // const foundPost = {
      //   id: '2f679dea-9b90-4cc4-965c-ee190bd9d322',
      //   title: 'a',
      //   description: 'a',
      //   published: false,
      //   archived: false
      // }
      if (!foundPost) {
        console.log('Post with provided ID not found')
        return
      }
      console.log(JSON.stringify(foundPost, null, 2))
    } catch (e) {
      console.error((e as Error).message)
    }
  }
}
