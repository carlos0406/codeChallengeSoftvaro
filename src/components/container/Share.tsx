import { BrowserRouter as Router, Link } from 'react-router-dom';

import ImgSect1 from '../../images/ImageSection1.png';
import styles from '../../styles/components/share.module.scss'


function Share() {
	return (
		<section className={styles.share}>
			<Router>
				<div className={styles['share-content']}>
					<div className={styles['share-text']}>
						<h2>
							Share your home, <br />
							nanny and costs
						</h2>
						<span>
							You have a fantastic home, a fantastic nanny and
							wouldn’t cutting your costs in half be, well,
							fantastic?! If only it was easy to connect with
							other parents to share your costs? Well now it is,
							with Hapu.
							<Link className={styles['tribe-link']} to='/tribe'>
								<span>Hapu means tribe </span>
							</Link>
							and it’s our foundational 3 tribal principles that
							empowers you to create and manage your own tribe. A
							tribe that together has the power to create new
							affordable solutions in childcare that work for you
							and your community.
						</span>
						<Link className={styles['start-link']} to='/start'>
							<span>Ready to get started?</span>
						</Link>
					</div>
					<img
						className={styles['share-img']}
						src={ImgSect1}
						alt="Hapu's App"
					/>
				</div>
			</Router>
		</section>
	);
}
export default Share;
