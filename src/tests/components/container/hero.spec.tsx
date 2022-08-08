import { render, screen } from '@testing-library/react'
import Hero from "../../../components/container/Hero"

describe('payment  component', () => {
	it('renders correctly', () => {
		render(<Hero />)
		expect(screen.getByText('Easily create or join a local nanny share with Hapu')).toBeInTheDocument()
		expect(screen.getByAltText("Hapu's Console")).toBeInTheDocument()

	})
})
