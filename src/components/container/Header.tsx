import { BrowserRouter as Router, Link } from 'react-router-dom';
import Badge from '../../utils/Badge.svg';
import styles from '../../styles/components/header.module.scss'


function Header() {
	return (
		<div className={styles.header}>
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
				<div className={styles['right-header']}>
					<button type='button' className={styles['header-button']}>
						<h5>Become a Nanny Share Host</h5>
					</button>
					<Link className={`${styles['header-link']} ${styles['sign-in']}`} to='/login'>
						<h5>Sign In</h5>
					</Link>
				</div>
			</Router>
		</div>
	);
}
export default Header;
