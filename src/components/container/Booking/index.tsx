import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from "./styles.module.scss"
import ProfileImage from '../../../assets/ProfileImage.svg';

function Booking() {
	return (
		<section className={styles.booking}>
			<Router>
				<img
					className={styles['profile-img']}
					src={ProfileImage}
					alt='User Profile'
				/>
				<Link className={styles['action-link']} to='/action'>
					<span>Sarah’s day care available now in North Sydney</span>
				</Link>
				<h4>Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
			</Router>
		</section>
	);
}
export default Booking;
