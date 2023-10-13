//  Import the parent class 'Shapes' to extend it
import Shapes from './shapes.js'
class Circle extends Shapes {
	constructor(text, textColor, shapeColor) {
		//  Call the constructor of the parent class 'Shape'
		super(text, textColor, shapeColor)
	}
	//  Method to render the Circle as an SVG
	render() {
		return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.shapeColor}" /><text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
	}
}
//  Export the 'Circle' class as the default export for this module
export default Circle
