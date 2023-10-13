//  Define a base class called 'Shapes'
class Shapes {
	constructor(text, textColor, shapeColor) {
		//  Convert the 'text' parameter to uppercase and store it as 'text'
		this.text = `${text}`.toUpperCase()
		//  Convert the 'textColor' parameter to a hexadecimal color format and store it as 'textColor'
		this.textColor = `#${textColor}`
		//  Convert the 'shapeColor' parameter to a hexadecimal color format and store it as 'shapeColor'
		this.shapeColor = `#${shapeColor}`
	}
}
//  Export the 'Shapes' class as the default export for this module
export default Shapes
