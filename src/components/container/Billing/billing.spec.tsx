import { render, screen } from '@testing-library/react'
import Billing from './index'

describe('billing  component', () => {
	it('renders correctly', () => {
		render(<Billing />)
		expect(screen.getByAltText("Billing Dashboard")).toBeInTheDocument()

	})
})
