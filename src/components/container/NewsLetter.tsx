import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from '../../styles/components/newsleter.module.scss'

function NewsLetter() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const newsLetterPost = async (data) => {
		try {
			const resp = await axios.post(
				'https://api.jungledevs.com/api/v1/challenge-newsletter/',
				data
			);
			console.log('Data post: ', data);
			console.log(resp.data);

			alert('Newsletter signed.');
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmit = (data) => {
		console.log(errors);
		newsLetterPost(data);
	};

	return (
		<section className={styles.newsletter}>
			<div className={styles['newsletter-content']}>
				<p className={styles.divider} />
				<h3>Are you a parent without a nanny and looking to share?</h3>
				<span>
					Leave us your name and email and we’ll update you as soon as
					a share becomes available in your area!
				</span>

				<form className={styles['form-fields']} onSubmit={handleSubmit(onSubmit)}>
					<input
						className={styles['form-field']}
						type='text'
						placeholder='Your name'
						{...register('name', {
							required: true,
							max: 30,
							min: 3,
							maxLength: 80
						})}
					/>
					<input
						className={styles['form-field']}
						type='email'
						placeholder='Your email'
						{...register('email', {
							required: true,
							pattern: /^\S+@\S+$/i
						})}
					/>
					<button type='submit' className={styles['send-button']}>
						<h5>Send</h5>
					</button>

					{/* <input type='submit' /> */}
				</form>
				<p className={styles.divider} />
			</div>
		</section>
	);
}
export default NewsLetter;
