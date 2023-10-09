import { textValidator } from '../prompts'

describe('Confirm prompts validation', () => {
	it('should throw error on invalid number of characters', () => {
		const result = textValidator('asdf')
		expect(result).toBe('Please use 3 or less characters')
	})
})
