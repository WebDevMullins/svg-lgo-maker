import inquirer from 'inquirer'
import { prompts } from './lib/prompts.js'

function init() {
	inquirer.prompt(prompts).then((response) => console.log(response))
}

init()
