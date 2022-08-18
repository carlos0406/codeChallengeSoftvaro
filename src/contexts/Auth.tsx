import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase'

type User = {
	id: string
	name: string
	avatar: string
}

type AuthContextType = {
	user: User
	singInWithGoogle: () => Promise<void>
}

type AuthContextProviderProps = {
	children: ReactNode
}
export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [user, setUser] = useState<User>()
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userUnsubscribe => {
			if (user) {
				const { displayName, photoURL, uid } = userUnsubscribe
				if (!displayName || !photoURL) {
					throw new Error('Missing informations from Google acount')
				}

				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL
				})

			}
		})
		return () => {
			unsubscribe()
		}
	}, [])

	async function singInWithGoogle() {
		const provider = new GoogleAuthProvider()
		const result = await signInWithPopup(auth, provider)
		if (result.user) {
			const { displayName, photoURL, uid } = result.user
			if (!displayName || !photoURL) {
				throw new Error('Missing informations from Google acount')
			}

			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL
			})
		}
	}
	return (
		<AuthContext.Provider value={{ user, singInWithGoogle }}>
			{children}
		</AuthContext.Provider>
	)
}
export function useAuth() {
	return useContext(AuthContext)
}
