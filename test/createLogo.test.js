//  Import the createShape function
import { createShape } from '../lib/createLogo'

//  Begin a test suite for the 'createShape' function
describe('createShape', () => {
	//  Define a testcase for creating a Circle shape
	test('should create a Circle shape', () => {
		//  Define input data
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Circle' }
		//  Call the 'createShape' function with the input data and get the result
		const result = createShape(response)
		//  Define the expected SVG for a Circle shape
		const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="#0000ff" /><text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		//  Expect that the result matches the expected SVG for a Circle
		expect(result).toEqual(svg)
	})
	//  Define a testcase for creating a Square shape
	test('should create a Square shape', () => {
		//  Define input data
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Square' }
		//  Call the 'createShape' function with the input data and get the result
		const result = createShape(response)
		//  Define the expected SVG for a Square shape
		const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#0000ff" /><text x="100" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		//  Expect that the result matches the expected SVG for a Square
		expect(result).toEqual(svg)
	})
	//  Define a testcase for creating a Triangle shape
	test('should create a Triangle shape', () => {
		//  Define input data
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Triangle' }
		//  Call the 'createShape' function with the input data and get the result
		const result = createShape(response)
		//  Define the expected SVG for a Triangle shape
		const svg = `<svg version="1.1"	width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 0 300, 200 0, 200" fill="#0000ff" /><text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text></svg>`
		//  Expect that the result matches the expected SVG for a Triangle
		expect(result).toEqual(svg)
	})
})
