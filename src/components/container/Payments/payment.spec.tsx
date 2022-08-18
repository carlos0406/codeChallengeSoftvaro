import { render, screen } from '@testing-library/react'
import Payment from './index'

describe('payment  component', () => {
	it('renders correctly', () => {
		render(<Payment />)
		expect(screen.getByText('Shared payments made simple')).toBeInTheDocument()
		expect(screen.getByAltText('Payments share console')).toBeInTheDocument()
	})
})
