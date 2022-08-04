import React from 'react';
import { Link,BrowserRouter as Router } from 'react-router-dom';
import PlayButton from '../utils/PlayButton.svg';
import styles from '../styles/ABtest/variant.module.scss'

function VariantA(props) {
	return (
		<div className={styles.variant}>
			<h1>Easily create or join a local nanny share with Hapu</h1>
			<h2>
				Hapu is Airbnb for nanny share. Share your home, nanny and costs
				and create new flexible, affordable solutions in childcare.
			</h2>
			<Router>
				<Link
					onClick={props.clickAction}
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
