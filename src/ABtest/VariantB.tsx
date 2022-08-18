import { Link, BrowserRouter as Router } from 'react-router-dom';
import PlayButton from '../assets/PlayButton.svg';
import styles from './variant.module.scss'

interface VariantBProps {
	clickAction: () => void;
}

function VariantB({ clickAction }: VariantBProps) {
	return (
		<div className={styles.variant}>
			<h1>Create the childcare you need at a price you can afford</h1>
			<h2>
				Connect with other local families to share a nanny from as low
				as $10.00/hr each. Create your family profile today to get
				started.
			</h2>
			<Router>
				<Link
					onClick={clickAction}
					className={styles['play-button']}
					data-testid='link'
					to='/play'
				>
					<img src={PlayButton} alt='Play Button' />
					<span>See hapu in action (27 seconds)</span>
				</Link>
			</Router>
		</div>
	);
}
export default VariantB;
