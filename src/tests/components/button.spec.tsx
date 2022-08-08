import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../components/Button'


describe('Button component', () => {
	it('renders correctly', () => {
		render(<Button title='title' />)
		expect(screen.getByText('title')).toBeInTheDocument()
	})
	it('Onclick has called', () => {
		const mockOnClick = jest.fn()
		render(<Button title='title' onClick={mockOnClick()} />)
		const button = screen.getByText('title')
		fireEvent.click(button)
		expect(mockOnClick).toHaveBeenCalled()
	})


})
