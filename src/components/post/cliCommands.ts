import { Command } from 'commander'
import * as commands from './controllers/cli'

const createPostCliCommand = commands.makeCreatePostCliCommand()
const viewPostCliCommand = commands.makeViewPostCliCommand()

export const postCliCommands = (program: Command) => {
  program
    .command('create')
    .description('Create a Post')
    .option('-t, --title <title>')
    .option('-d, --description <description>')
    .action(createPostCliCommand.handle.bind(createPostCliCommand))

  program
    .command('view <id>')
    .description('View a Post')
    .action(viewPostCliCommand.handle.bind(viewPostCliCommand))
}
