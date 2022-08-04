import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styles from '../../styles/components/framework.module.scss'

function Framework() {
	return (
		<section className={styles.framework} >
			<Router>
				<div className={styles['framework-content']}>
					<h2>A framework built for the long term </h2>
					<p className={styles['framework-text']}>
						Childcare is for the long term. And you need a framework
						you can count on that gives your share long term
						viability and success. That’s why we’ve defined Hapu
						around our three tribal principles; clearly defined
						process, transparency over money and equality of
						participation.
					</p>
					<Link className={styles['read-link']} to='/bridget'>
						<span>
							Read how Hapu’s tribal background defines our app
						</span>
					</Link>
				</div>
			</Router>
		</section>
	);
}
export default Framework;
