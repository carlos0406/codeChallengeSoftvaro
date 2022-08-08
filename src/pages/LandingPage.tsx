import { useEffect, useState } from 'react';
import axios from 'axios';
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
import Articles from '../components/container/Articles';

type Article = {
	title: string,
	description: string,
	url: string,
	urlToImage: string
}

function LandingPage() {
	const [articles, setArticles] = useState<Article[]>([])
	async function populateArticles() {
		const { data } = await axios.get("https://newsapi.org/v2/everything?q=nanny&searchIn=title&pageSize=3&apiKey=68ce9c0cabc04b548b2a4f4078bd0a07")
		setArticles(data.articles)
	}
	useEffect(() => {
		populateArticles()
	}, [])
	return (
		<div className={styles.lading}>
			<Header data-testid='header' />
			<Hero />
			<Booking />
			<Share />
			<Payments />
			<Framework />
			<Billing />
			<Diary />
			<Host />
			<Articles articles={articles} />
			<Footer />
		</div>

	);
}
export default LandingPage;
