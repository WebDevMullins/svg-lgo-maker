const prompts = [
	{
		type: 'input',
		name: 'text',
		message: 'Enter up to 3 characters: '
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

export default prompts
