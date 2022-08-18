import { render, screen } from '@testing-library/react'
import Framework from './index'

describe('Framework component', () => {
	it('renders correctly', () => {
		render(<Framework />)
		expect(screen.getByText('A framework built for the long term')).toBeInTheDocument()
		expect(screen.getByText("Read how Hapu’s tribal background defines our app")).toBeInTheDocument()
	})
})
