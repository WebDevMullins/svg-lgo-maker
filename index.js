import inquirer from 'inquirer'
import prompts from './lib/userPrompts.js'

async function init() {
	const answers = await inquirer.prompt(prompts)
	// Use answers here as needed
	console.log(answers)
}

init()
