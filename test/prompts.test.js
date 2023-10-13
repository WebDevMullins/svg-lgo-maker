//  Import validation functions
import { colorValidator, shapeValidator, textValidator } from '../lib/prompts'

//  Begin a test suite to confirm prompts validation
describe('Confirm prompts validation', () => {
	describe('Text Validator', () => {
		// Test for returning an error message for an invalid number of characters
		it('should return an error message for an invalid number of characters', () => {
			const result = textValidator('asdf')
			expect(result).toBe('Please use 3 or less characters')
		})
		// Test for returning 'true' for a valid number of characters
		it('should return true for a valid number of characters', () => {
			const result = textValidator('abc')
			expect(result).toBe(true)
		})
	})
	describe('Color Validator', () => {
		// Test for returning an error message for an invalid input
		it('should return an error message for an invalid input', () => {
			const result = colorValidator('fffzzz')
			expect(result).toBe('Please use a valid hexadecimal color')
		})
		// Test for returning an error message for input with the wrong length
		it('should return an error message for input with wrong length', () => {
			const result = colorValidator('fff')
			expect(result).toBe('Please use a valid hexadecimal color')
		})
		// Test for returning 'true' for a valid hexadecimal color
		it('should return true for a valid hexadecimal color', () => {
			const result = colorValidator('fff123')
			expect(result).toBe(true)
		})
	})
	describe('Shape Validator', () => {
		// Test for validating shape input as 'Circle'
		it('should validate shape input as "Circle"', () => {
			const response = { shape: 'Circle' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		// Test for validating shape input as 'Square'
		it('should validate shape input as "Square"', () => {
			const response = { shape: 'Square' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		// Test for validating shape input as 'Triangle'
		it('should validate shape input as "Triangle"', () => {
			const response = { shape: 'Triangle' }
			const result = shapeValidator(response.shape)
			expect(result).toBe(true)
		})
		// Test for returning an error message for an invalid shape
		it('should return an error message for an invalid shape', () => {
			const response = { shape: 'Star' }
			const result = shapeValidator(response.shape)
			expect(result).toBe('Please choose a valid shape')
		})
	})
})
