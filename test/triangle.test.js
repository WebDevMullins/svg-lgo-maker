//  Import the 'Triangle' class
import Triangle from '../lib/triangle'

//  Begin a test suite for the 'Triangle' class
describe('Triangle', () => {
	//  Define a testcase for creating a Triangle and setting its properties
	test('should create a triangle and set the shape color, text, and text color', () => {
		//  Create a new instance of the 'Triangle' class with specified text, text color, and shape color
		const shape = new Triangle('abc', 'ff0000', '0000ff')
		//  Expect the rendered SVG of the 'shape' matches the expected SVG string
		expect(shape.render()).toBe(
			`<svg version="1.1"	width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 200 0, 200" fill="#0000ff" /><text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		)
	})
})
