import React from 'react';
import Hero from '../components/container/Hero';
import Booking from '../components/container/Booking';
import Share from '../components/container/Share';
import Payments from '../components/container/Payments';
import Framework from '../components/container/Framework';
import Billing from '../components/container/Billing';
import Diary from '../components/container/Diary';
import Host from '../components/container/Host';
import Footer from '../components/container/Footer';
import Header from '../components/container/Header';
import styles from '../styles/pages/lading.module.scss'


function LandingPage() {
	return (
		<div className={styles.lading}>
			<Header />
			<Hero />
			<Booking />
			<Share />
			<Payments />
			<Framework />
			<Billing />
			<Diary />
			<Host />
			<Footer />
		</div>

	);
}
export default LandingPage;
