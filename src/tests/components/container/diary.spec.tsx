import { render, screen } from '@testing-library/react'
import Diary from '../../../components/container/Diary'

describe('diary  component', () => {
	it('renders correctly', () => {
		render(<Diary />)
		expect(screen.getByText("With the Hapu daily diary your nanny will be able to update "
			+ "you and your sharers with photos and commentary of the day. " +
			"You and sharers will receive notifications and you’ll be " +
			"able to login to view the daily adventures fo your little " +
			"ones. We can’t wait!")).toBeInTheDocument()
		expect(screen.getByAltText("Nanny Share Diary")).toBeInTheDocument()
	})
})
