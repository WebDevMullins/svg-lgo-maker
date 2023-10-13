//  Import the 'Circle' class
import Circle from '../lib/circle'

//  Begin a test suite for the 'Circle' class
describe('Circle', () => {
	//  Define a testcase for creating a Circle and setting its properties
	test('should create a Circle and set the shape color, text, and text color', () => {
		//  Create a new instance of the 'Circle' class with specified text, text color, and shape color
		const shape = new Circle('abc', 'ff0000', '0000ff')
		//  Expect the rendered SVG of the 'shape' matches the expected SVG string
		expect(shape.render()).toBe(
			`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="#0000ff" /><text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		)
	})
})
