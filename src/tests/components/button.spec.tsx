import { render, screen } from '@testing-library/react'
import Button from '../../components/Button'

test("teste", () => {
	expect(1 + 1).toBe(2)
})


describe('Posts Page', () => {
	it('renders correctly', () => {
		render(<Button title='title' />)
		expect(screen.getByText('title')).toBeInTheDocument()
	})
})
