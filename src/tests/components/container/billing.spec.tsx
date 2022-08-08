import { render, screen } from '@testing-library/react'
import Billing from "../../../components/container/Billing"

describe('billing  component', () => {
	it('renders correctly', () => {
		render(<Billing />)
		expect(screen.getByAltText("Billing Dashboard")).toBeInTheDocument()

	})
})
