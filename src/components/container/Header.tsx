import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useContext } from 'react';
import Badge from '../../utils/Badge.svg';
import styles from '../../styles/components/header.module.scss'
import { AuthContext } from '../../contexts/Auth';


function Header() {
	const { singInWithGoogle, user } = useContext(AuthContext)
	return (
		<div className={styles.header}>
			<form />
			<Router>
				<div className={styles['left-header']}>
					<Link className={styles.badge} to='/'>
						<img src={Badge} alt='Badge' />
					</Link>
					<Link className={`${styles['header-link']} ${styles.link1}`} to='/nanny'>
						<h5>Create Your Nanny Share</h5>
					</Link>
					<Link className={`${styles['header-link']} ${styles.link2}`} to='/shares'>
						<h5>Browse Shares</h5>
					</Link>
					<Link className={`${styles['header-link']} ${styles.link3}`} to='/story'>
						<h5>Our Story</h5>
					</Link>
				</div>
				<form className={styles['right-header']}>
					<button type='button' className={styles['header-button']}>
						<h5>Become a Nanny Share Host</h5>
					</button>
					{user ? (<img src={user.avatar} alt="avatar" className={styles.avatar} />) : (<button type="button" className={styles['sign-in-button']} onClick={() => singInWithGoogle()}>
						<h5>Sign In</h5>
					</button>)}
				</form>
			</Router>
		</div>
	);
}
export default Header;
