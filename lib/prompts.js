//  Validation function that checks if the input is more than 3 characters
const textValidator = (input) => {
	if (input.length > 3) {
		return 'Please use 3 or less characters'
	}
	return true
}

// Validation function that checks if the input is a valid 6-character hexadecimal color
const colorValidator = (input) => {
	const regexp = /^[0-9a-fA-F]+$/

	if (!regexp.test(input) || input.length !== 6) {
		return 'Please use a valid hexadecimal color'
	}
	return true
}

// Validation function that checks if the input matches one of the valid shape options
const shapeValidator = (input) => {
	const validShapes = ['Circle', 'Square', 'Triangle']

	if (!validShapes.includes(input)) {
		return 'Please choose a valid shape'
	}
	return true
}

//  An array of prompts for user input, including questions and validation functions
const prompts = [
	{
		type: 'input',
		name: 'text',
		message: 'Enter up to 3 characters: ',
		validate: textValidator
	},
	{
		type: 'input',
		name: 'textColor',
		message: 'Enter the text color (hexadecimal): ',
		validate: colorValidator
	},
	{
		type: 'list',
		name: 'shape',
		message: 'Choose a shape: ',
		choices: ['Circle', 'Square', 'Triangle'],
		validate: shapeValidator
	},
	{
		type: 'input',
		name: 'shapeColor',
		message: 'Enter the shape color (hexadecimal): ',
		validate: colorValidator
	}
]

//  Export validations functions and prompts
export { colorValidator, prompts, shapeValidator, textValidator }
