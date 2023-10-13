import { Circle, Square, Triangle } from '../lib/shapes'

describe('Shapes', () => {
	describe('Circle', () => {
		test('should create a Circle and set the shape color, text, and text color', () => {
			const shape = new Circle('abc', 'ff0000', '0000ff')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="150" cy="100" r="100" fill="#0000ff" />
			<text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`)
		})
	})

	describe('Square', () => {
		test('should create a square and set the shape color, text, and text color', () => {
			const shape = new Square('abc', 'ff0000', '0000ff')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="200" height="200" fill="#0000ff" />
			<text x="100" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`)
		})
	})
	describe('Triangle', () => {
		test('should create a triangle and set the shape color, text, and text color', () => {
			const shape = new Triangle('abc', 'ff0000', '0000ff')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<polygon points="150, 0 300, 200 0, 200" fill="#0000ff" />
			<text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`)
		})
	})
})
