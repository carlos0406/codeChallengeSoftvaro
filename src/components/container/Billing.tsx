import React from 'react';
import ImgSect4 from '../../images/ImageSection4.png';
import styles from '../../styles/components/billing.module.scss'

function Billing() {
	return (
		<section className={styles.billing}>
			<img src={ImgSect4} alt='Billing Dashboard' />
		</section>
	);
}
export default Billing;
