//  Import the 'Circle' class
import Square from '../lib/square'

//  Begin a test suite for the 'Square' class
describe('Square', () => {
	//  Define a testcase for creating a Circle and setting its properties
	test('should create a square and set the shape color, text, and text color', () => {
		//  Create a new instance of the 'Square' class with specified text, text color, and shape color
		const shape = new Square('abc', 'ff0000', '0000ff')
		//  Expect the rendered SVG of the 'shape' matches the expected SVG string
		expect(shape.render()).toBe(
			`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#0000ff" /><text x="100" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		)
	})
})
