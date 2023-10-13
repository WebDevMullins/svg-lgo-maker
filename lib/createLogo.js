import fs from 'fs'
import Circle from './circle.js'
import Square from './square.js'
import Triangle from './triangle.js'

function createShape({ text, textColor, shapeColor, shape }) {
	switch (shape) {
		case 'Circle':
			return new Circle(text, textColor, shapeColor).render()
		case 'Square':
			return new Square(text, textColor, shapeColor).render()
		case 'Triangle':
			return new Triangle(text, textColor, shapeColor).render()
		default:
			break
	}
}

function createLogo(response) {
	fs.writeFile('./output/logo.svg', createShape(response), (err) =>
		err ? console.log(err) : console.log('Generated logo.svg')
	)
}

export { createLogo, createShape }
