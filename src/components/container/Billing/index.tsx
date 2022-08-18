import ImgSect4 from '../../../assets/images/ImageSection4.png';
import styles from "./styles.module.scss"

function Billing() {
	return (
		<section className={styles.billing}>
			<img src={ImgSect4} alt='Billing Dashboard' />
		</section>
	);
}
export default Billing;
