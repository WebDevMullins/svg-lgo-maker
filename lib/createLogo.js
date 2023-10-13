//  Import the 'fs' module
import fs from 'fs'

//  Import classes
import Circle from './circle.js'
import Square from './square.js'
import Triangle from './triangle.js'

//  Function to create a shape based on the user's input
function createShape({ text, textColor, shapeColor, shape }) {
	//  Use a switch statemnt to determine which shape to create based on the 'shape' parameter
	switch (shape) {
		case 'Circle':
			//  Create a new Circle obj with the provided parameters and render to SVG
			return new Circle(text, textColor, shapeColor).render()
		case 'Square':
			//  Create a new Square obj with the provided parameters and render to SVG
			return new Square(text, textColor, shapeColor).render()
		case 'Triangle':
			//  Create a new Triangle obj with the provided parameters and render to SVG
			return new Triangle(text, textColor, shapeColor).render()
		default:
			//  Do nothing if unsupported shape is provided
			break
	}
}

//  Function to create a logo and write to file
function createLogo(response) {
	//  Write the SVG to file named 'logo.svg' to the 'output' folder and console log that it has been generated
	fs.writeFile('./output/logo.svg', createShape(response), (err) =>
		err ? console.log(err) : console.log('Generated logo.svg')
	)
}
//  Export functions
export { createLogo, createShape }
