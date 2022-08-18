import { render, screen } from '@testing-library/react'
import NewsLetter from './index'


// jest.mock('react-hook-form')
describe('newsletter  component', () => {

	it('renders correctly', () => {
		render(<NewsLetter />)
		expect(screen.getByText("Send")).toBeInTheDocument()
		expect(screen.getByPlaceholderText("Your email")).toBeInTheDocument()
		expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument()
	})
})
