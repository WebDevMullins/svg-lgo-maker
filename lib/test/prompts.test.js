import { colorValidator, textValidator } from '../prompts'

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
		it('should return an error message for an invalid hexadecimal color', () => {
			const result = colorValidator('fff')
			expect(result).toBe('Please use a valid hexadecimal color')
		})
		it('should return true for a valid hexadecimal color', () => {
			const result = colorValidator('fff123')
			expect(result).toBe(true)
		})
	})
})
