import { colorValidator, shapeValidator, textValidator } from '../lib/prompts'

describe('Confirm prompts validation', () => {
	describe('Text Validator', () => {
		it('should return an error message for an invalid number of characters', () => {
			const result = textValidator('asdf')
			expect(result).toBe('Please use 3 or less characters')
		})
		it('should return true for a valid number of characters', () => {
			const result = textValidator('abc')
			expect(result).toBe(true)
		})
	})
	describe('Color Validator', () => {
		it('should return an error message for an invalid input', () => {
			const result = colorValidator('fffzzz')
			expect(result).toBe('Please use a valid hexadecimal color')
		})
		it('should return an error message for input with wrong length', () => {
			const result = colorValidator('fff')
			expect(result).toBe('Please use a valid hexadecimal color')
		})
		it('should return true for a valid hexadecimal color', () => {
			const result = colorValidator('fff123')
			expect(result).toBe(true)
		})
	})
	describe('Shape Validator', () => {
		it('should validate shape input as "Circle"', () => {
			const response = { shape: 'Circle' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		it('should validate shape input as "Square"', () => {
			const response = { shape: 'Square' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		it('should validate shape input as "Triangle"', () => {
			const response = { shape: 'Triangle' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		it('should return an error message for an invalid shape', () => {
			const response = { shape: 'Star' }
			const result = shapeValidator(response.shape)
			expect(result).toBe('Please choose a valid shape')
		})
	})
})
