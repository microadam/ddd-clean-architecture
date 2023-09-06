import figlet from 'figlet'
import { Command } from 'commander'

import { postCliCommands } from './components/post/cliCommands'

console.log(figlet.textSync('Blog Manager'))

const program = new Command()

program.version('1.0.0').description('An example CLI for managing a blog')

postCliCommands(program)

program.parse(process.argv)
