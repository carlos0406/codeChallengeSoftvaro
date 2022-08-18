import { BrowserRouter as Router, Link } from 'react-router-dom';
import CalendarIcon from '../../../assets/CalendarIcon.svg';
import styles from "./styles.module.scss"

function Host() {
	return (
		<section className={styles.host}>
			<Router>
				<div className={styles['host-content']}>
					<h2>Become a nanny share host </h2>
					<p>Takes less than 5 minutes to get started</p>
					<Link className={styles['create-link']} to='/login'>
						<button type='button' className={styles['host-button']}>
							<img
								className={styles['calendar-icon']}
								src={CalendarIcon}
								alt='Nanny Share Calendar Button'
							/>
							<span className={styles['button-text']}>
								Create your nanny share
							</span>
							<span className={styles['button-subtext']}>
								Takes less than 5 minutes
							</span>
						</button>
					</Link>
					<Link to='/browse'>
						<span className={styles['host-link']}>
							Or browse local nanny-shares
						</span>
					</Link>
				</div>
			</Router>
		</section>
	);
}
export default Host;
