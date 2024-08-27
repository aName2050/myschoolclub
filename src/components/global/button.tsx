import React from 'react';
import styles from '@/styles/component-styles/button.module.css';

const Button: React.FC<IButtonProps> = ({
	label,
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
			{label}
		</button>
	);
};

export default Button;
