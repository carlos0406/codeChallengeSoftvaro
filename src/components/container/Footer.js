import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HapuLogo from '../../utils/Logo.svg';
import FacebookIcon from '../../utils/Facebook.svg';
import TwitterIcon from '../../utils/Twitter.svg';
import InstagramIcon from '../../utils/Instagram.svg';
import styles from '../../styles/components/footer.module.scss'

function Footer() {
	return (
		<div className={styles.footer}>
			<Router>
				<Link className={styles['hapu-logo']} to='/'>
					<img src={HapuLogo} alt='Hapu Logo' />
				</Link>
				<div className={styles['footer-links']}>
					<Link className={styles['footer-link']} to='/share'>
						<h5>Share Your Nanny</h5>
					</Link>
					<Link className={styles['footer-link']} to='/story'>
						<h5>Our Story</h5>
					</Link>
					<Link className={styles['footer-link']} to='/blog'>
						<h5>Blog</h5>
					</Link>
					<Link className={styles['footer-link']} to='/terms'>
						<h5>Terms & Privacity</h5>
					</Link>
				</div>
				<div className={styles['social-media']}>
					<Link to='/'>
						<img src={FacebookIcon} alt='Facebook' />
					</Link>
					<Link className={styles['twiter-icon']} to='/'>
						<img src={TwitterIcon} alt='Twitter' />
					</Link>
					<Link to='/'>
						<img src={InstagramIcon} alt='Instagram' />
					</Link>
				</div>
				<p className={styles.divider }/>
				<h5 className={styles.copyright}>
					Copyright © 2017 Hapu PTY Limited All rights reserved
				</h5>
			</Router>
		</div>
	);
}
export default Footer;
