import { useAuth } from "../../../../contexts/Auth"
import styles from "../styles.module.scss"

function Signin() {
	const { singInWithGoogle, user } = useAuth()
	if (user) {
		return (
			<img src={user.avatar} alt="avatar" className={styles.avatar} referrerPolicy="no-referrer" />
		)
	}

	return (
		<button type="button" className={styles['sign-in-button']} onClick={() => { singInWithGoogle() }}>
			<h5>Sign In</h5>
		</button>
	)
}

export default Signin;
