const { Circle, Square, Triangle } = require('../shapes')

describe('Shapes', () => {
	describe('Circle', () => {
		test('should create a Circle and set the shape color, text, and text color', () => {
			const shape = new Circle('blue', 'BSM', 'white')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="150" cy="100" r="100" fill="blue" />
			<text x="150" y="125" font-size="70 "text-anchor="middle "fill="white">BSM</text>
		</svg>
		`)
		})
	})

	describe('Square', () => {
		test('should create a square and set the shape color, text, and text color', () => {
			const shape = new Square('blue', 'BSM', 'white')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="100%" height="100%" fill="blue" />
			<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BSM</text>
		</svg>
		`)
		})
	})
	describe('Triangle', () => {
		test('should create a triangle and set the shape color, text, and text color', () => {
			const shape = new Triangle('blue', 'BSM', 'white')
			expect(shape.render()).toBe(`
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<polygon points="150, 18 244, 182 56, 182" fill="blue" />
			<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BSM</text>
		</svg>
		`)
		})
	})
})
