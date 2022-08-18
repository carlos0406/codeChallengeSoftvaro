import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { mocked } from 'jest-mock'
import Header from './index'
import { useAuth } from '../../../contexts/Auth'

jest.mock('../../../contexts/Auth')
describe('Header  component', () => {
	it('renders correctly without user', () => {
		const authMock = mocked(useAuth);
		authMock.mockReturnValueOnce({
			user: null,
			singInWithGoogle: jest.fn()
		})
		render(<Header />)

		waitFor(() => expect(screen.findByText('teste')).toBeInTheDocument())
		waitFor(() => expect(screen.findByText('Become a Nanny Share Host')).toBeInTheDocument())
		waitFor(() => expect(screen.findByText('Sign In')).toBeInTheDocument())
		waitFor(() => expect(screen.findByAltText('Badge')).toBeInTheDocument())
	})

	it('renders correctly with user', () => {
		const authMock = mocked(useAuth);

		authMock.mockReturnValueOnce({
			user: {
				id: "1",
				name: 'Name',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EhD43cdXGz0Fsdfsbv-kJ4duRN_YRr5jjKm3NEUT5w&s'
			},
			singInWithGoogle: jest.fn()
		})
		render(<Header />)

		waitFor(() => expect(screen.findByText('teste')).toBeInTheDocument())
		waitFor(() => expect(screen.findByText('Become a Nanny Share Host')).toBeInTheDocument())
		waitFor(() => expect(screen.findByAltText('avatar')).toBeInTheDocument())
		waitFor(() => expect(screen.findByAltText('Badge')).toBeInTheDocument())
	})

	it('Sign In button', async () => {
		const authMock = mocked(useAuth);
		const mockOnClickSignIn = jest.fn()
		authMock.mockReturnValueOnce({
			user: null,
			singInWithGoogle: mockOnClickSignIn
		})
		render(<Header />)
		const loginButton = await screen.findByText('Sign In')
		fireEvent.click(loginButton);
		expect(mockOnClickSignIn).toHaveBeenCalled()
	})
})
