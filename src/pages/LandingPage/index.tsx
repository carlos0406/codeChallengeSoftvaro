import { useArticles } from '../../hooks/useArticles';
import styles from "./styles.module.scss"
import Articles from '../../components/container/Articles';
import Header from '../../components/container/Header';
import Hero from '../../components/container/Hero';
import Booking from '../../components/container/Booking';
import Share from '../../components/container/Share';
import Payments from '../../components/container/Payments';
import Framework from '../../components/container/Framework';
import Billing from '../../components/container/Billing';
import Diary from '../../components/container/Diary';
import Host from '../../components/container/Host';
import Footer from '../../components/container/Footer';


function LandingPage() {
	const { isLoading, articles } = useArticles();
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
			<Articles articles={articles} isLoading={isLoading} />
			<Footer />
		</div>

	);
}
export default LandingPage;
