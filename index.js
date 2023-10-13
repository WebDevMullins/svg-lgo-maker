//  Import the 'inquire' module
import inquirer from 'inquirer'

//  Import function and array
import { createLogo } from './lib/createLogo.js'
import { prompts } from './lib/prompts.js'

//  Define init function to start app
function init() {
	//  Use 'inquirer to prompt the user with questions defined in 'prompts'
	inquirer
		.prompt(prompts)
		.then((response) => {
			//  Call 'createLogo' after prompts have been answered and pass the user's input
			createLogo(response)
		})
		.catch((err) => {
			//  If there is an error, log the error to the console
			console.log(err)
		})
}

//  Call the 'init' function to start app
init()
