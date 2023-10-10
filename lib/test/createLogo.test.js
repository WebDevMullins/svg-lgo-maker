import { jest } from '@jest/globals'
import fs from 'fs'
import { createShape } from '../createLogo'

jest.mock('fs', () => ({
	writeFile: jest.fn()
}))

describe('createShape', () => {
	it('creates a Circle shape', () => {
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Circle' }
		const result = createShape(response)
		const svg = `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<circle cx="150" cy="100" r="100" fill="#0000ff" />
			<text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`
		expect(result).toEqual(svg)
	})
	it('creates a Square shape', () => {
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Square' }
		const result = createShape(response)
		const svg = `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<rect width="200" height="200" fill="#0000ff" />
			<text x="150" y="125" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`
		expect(result).toEqual(svg)
	})
	it('creates a Triangle shape', () => {
		const response = { text: 'ABC', textColor: 'ff0000', shapeColor: '0000ff', shape: 'Triangle' }
		const result = createShape(response)
		const svg = `
		<svg version="1.1"
			width="300" height="200"
			xmlns="http://www.w3.org/2000/svg">
			<polygon points="150, 0 300, 200 0, 200" fill="#0000ff" />
			<text x="150" y="170" font-size="70" font-family="Arial" text-anchor="middle" fill="#ff0000">ABC</text>
		</svg>
		`
		expect(result).toEqual(svg)
	})
})
