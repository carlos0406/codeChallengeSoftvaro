import { render, screen } from '@testing-library/react'
import Share from './index'

describe('Share  component', () => {
	it('renders correctly', () => {
		render(<Share />)
		expect(screen.getByText('Hapu means tribe')).toBeInTheDocument()
		expect(screen.getByAltText("Hapu's App")).toBeInTheDocument()
	})
})
