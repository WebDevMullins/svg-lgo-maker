const textValidator = (input) => {
	if (input.length > 3) {
		return 'Please use 3 or less characters'
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
		message: 'Enter the text color: '
	},
	{
		type: 'list',
		name: 'shape',
		message: 'Enter the text color: ',
		choices: ['Circle', 'Square', 'Triangle']
	},
	{
		type: 'input',
		name: 'shapeColor',
		message: 'Enter the shape color: '
	}
]

export { prompts, textValidator }
