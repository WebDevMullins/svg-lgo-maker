//  Import the parent class 'Shapes' to extend it
import Shapes from './shapes'
class Triangle extends Shapes {
	constructor(text, textColor, shapeColor) {
		//  Call the constructor of the parent class 'Shape'
		super(text, textColor, shapeColor)
	}
	//  Method to render the Triangle as an SVG
	render() {
		return `<svg version="1.1"	width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 200 0, 200" fill="${this.shapeColor}" /><text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
	}
}
//  Export the 'Triangle' class as the default export for this module
export default Triangle
