import { render, screen } from '@testing-library/react'
import Payment from '../../../components/container/Payments'

describe('payment  component', () => {
	it('renders correctly', () => {
		render(<Payment />)
		expect(screen.getByText('Shared payments made simple')).toBeInTheDocument()
		expect(screen.getByAltText('Payments share console')).toBeInTheDocument()
	})
})
