// Import the 'Shapes' class
import Shapes from '../lib/shapes'

//  Begin a test suite for the 'Shapes' class
describe('Shapes', () => {
	//  Define a test case for the 'Shapes class constructor
	test('should correctly porcess text, textColor, shapeColor', () => {
		//  Create a new instance of the 'Triangle' class with specified text, text color, and shape color
		const shape = new Shapes('abc', 'ff0000', '0000ff')
		//  Expect the 'text' property has been converted to uppercase
		expect(shape.text).toBe('ABC')
		//  Expect the 'textColor' property is a correct hexadecimal
		expect(shape.textColor).toBe('#ff0000')
		//  Expect the 'shapeColor' property is a correct hexadecimal
		expect(shape.shapeColor).toBe('#0000ff')
	})
})
