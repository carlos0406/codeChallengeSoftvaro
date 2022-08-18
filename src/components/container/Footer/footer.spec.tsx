import { render, screen } from '@testing-library/react'
import Footer from './index'

describe('Footer  component', () => {
	it('renders correctly', () => {
		render(<Footer />)
		expect(screen.getByText("Copyright © 2017 Hapu PTY Limited All rights reserved")).toBeInTheDocument()
		expect(screen.getByAltText("Hapu Logo")).toBeInTheDocument()
		expect(screen.getByAltText("Facebook")).toBeInTheDocument()
		expect(screen.getByAltText("Twitter")).toBeInTheDocument()
		expect(screen.getByAltText("Instagram")).toBeInTheDocument()
	})
})
