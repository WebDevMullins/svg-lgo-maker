const textValidator = (input) => {
	if (input.length > 3) {
		return 'Please use 3 or less characters'
	}
	return true
}

const colorValidator = (input) => {
	const regexp = /^[0-9a-fA-F]+$/

	if (!regexp.test(input) || input.length !== 6) {
		return 'Please use a valid hexadecimal color'
	}
	return true
}

const shapeValidator = (input) => {
	const validShapes = ['Circle', 'Square', 'Triangle']

	if (!validShapes.includes(input)) {
		return 'Please choose a valid shape'
	}
	return true
}

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

export { colorValidator, prompts, shapeValidator, textValidator }
