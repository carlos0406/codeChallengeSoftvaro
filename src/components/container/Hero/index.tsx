import { BrowserRouter as Router } from 'react-router-dom';
import ImgHero from '../../../assets/images/ImageHeader.png';
import styles from "./styles.module.scss"


function Hero() {
	return (
		<section className={styles.hero}>
			<Router>
				<div className={styles['hero-content']}>
					<div className={styles['hero-text']}>
						<div className={styles['variant-a']}>
							<h1>
								Easily create or join a local nanny share with
								Hapu
							</h1>
							<h2>
								Hapu is Airbnb for nanny share. Share your home,
								nanny and costs and create new flexible,
								affordable solutions in childcare.
							</h2>
						</div>
					</div>
					<img
						className={styles['img-hero']}
						src={ImgHero}
						alt="Hapu's Console"
					/>
				</div>
			</Router>
		</section>
	)
};
export default Hero;
