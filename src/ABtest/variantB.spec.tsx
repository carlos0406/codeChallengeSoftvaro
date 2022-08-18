import { fireEvent, render, screen } from '@testing-library/react'
import VariantB from './VariantB'



describe('VariantB  component', () => {

	it('renders correctly', () => {
		render(<VariantB clickAction={jest.fn()} />)
		expect(screen.getByText("Create the childcare you need at a price you can afford")).toBeInTheDocument()
		expect(screen.getByAltText("Play Button")).toBeInTheDocument()
	})

	it('calling clickAction', () => {
		const clickAction = jest.fn()
		render(<VariantB clickAction={clickAction} />)
		const button = screen.getByTestId('link')
		fireEvent.click(button)
		expect(clickAction).toHaveBeenCalled()
	})
})
