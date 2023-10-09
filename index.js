import inquirer from 'inquirer'
import { createLogo } from './lib/createLogo.js'
import { prompts } from './lib/prompts.js'

function init() {
	inquirer
		.prompt(prompts)
		.then((response) => {
			createLogo(response)
		})
		.catch((err) => {
			console.log(err)
		})
}

init()
