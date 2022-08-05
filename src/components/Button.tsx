import { ButtonHTMLAttributes } from 'react';
import styles from "../styles/components/button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string
}

function Button({ title, ...rest }: ButtonProps) {
	return (
		<button className={styles.button} {...rest}  >
			<h5>{title}</h5>
		</button>
	);
}
export default Button;
