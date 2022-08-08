import { fireEvent, render, screen } from '@testing-library/react'
import VariantA from '../../ABtest/VariantA'


// jest.mock('react-hook-form')
describe('VariantA  component', () => {

	it('renders correctly', () => {
		render(<VariantA clickAction={jest.fn()} />)
		expect(screen.getByText("Easily create or join a local nanny share with Hapu")).toBeInTheDocument()
		expect(screen.getByAltText("Play Button")).toBeInTheDocument()
	})

	it('calling clickAction', () => {
		const clickAction = jest.fn()
		render(<VariantA clickAction={clickAction} />)
		const button = screen.getByTestId('link')
		fireEvent.click(button)
		expect(clickAction).toHaveBeenCalled()
	})
})
