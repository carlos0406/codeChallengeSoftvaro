import { render, screen } from '@testing-library/react'
import Share from '../../../components/container/Share'

describe('Share  component', () => {
	it('renders correctly', () => {
		render(<Share />)
		expect(screen.getByText('Hapu means tribe')).toBeInTheDocument()
		expect(screen.getByAltText("Hapu's App")).toBeInTheDocument()
	})
})
