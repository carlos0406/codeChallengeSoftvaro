import { Link, BrowserRouter as Router } from 'react-router-dom';
import PlayButton from '../assets/PlayButton.svg';
import styles from './variant.module.scss'

interface VariantAProps {
	clickAction: () => void;
}
function VariantA({ clickAction }: VariantAProps) {
	return (
		<div className={styles.variant}>
			<h1>Easily create or join a local nanny share with Hapu</h1>
			<h2>
				Hapu is Airbnb for nanny share. Share your home, nanny and costs
				and create new flexible, affordable solutions in childcare.
			</h2>
			<Router>
				<Link
					onClick={clickAction}
					data-testid="link"
					className={styles['play-button']}
					to='/play'
				>
					<img src={PlayButton} alt='Play Button' />
					<span>See hapu in action (27 seconds)</span>
				</Link>
			</Router>
		</div>
	);
}
export default VariantA;
