import { render, screen } from '@testing-library/react'
import Host from './index'

describe('host  component', () => {
	it('renders correctly', () => {
		render(<Host />)
		expect(screen.getByText('Become a nanny share host')).toBeInTheDocument()
		expect(screen.getByAltText('Nanny Share Calendar Button')).toBeInTheDocument()
	})
})
