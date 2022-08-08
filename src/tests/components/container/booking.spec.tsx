import { render, screen } from '@testing-library/react'
import Booking from '../../../components/container/Booking'

describe('booking  component', () => {
	it('renders correctly', () => {
		render(<Booking />)
		expect(screen.getByText("Sarah’s day care available now in North Sydney")).toBeInTheDocument()
		expect(screen.getByAltText("User Profile")).toBeInTheDocument()
	})
})
