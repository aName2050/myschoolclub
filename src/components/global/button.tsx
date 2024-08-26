import React from 'react';
import styles from '@/styles/component-styles/button.module.css';

const Button: React.FC<IButtonProps> = ({
	text,
	onClick,
	disabled = false,
	className = '',
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${styles.button} ${
				disabled ? 'styles.buttonDisabled' : ''
			} ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
