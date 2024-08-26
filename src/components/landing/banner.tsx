import React from 'react';
import styles from '@/styles/component-styles/banner.module.css';

const Banner: React.FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<h1 className={styles.title}>The best club management app</h1>
				<h2 className={styles.subtitle}>
					For high school and college students
				</h2>
				<p className={styles.paragraph}>
					Tired of having to make a new sign-up form every year?
					Communicating with members? Planning events?
				</p>
				<p className={styles.paragraph}>
					Because we have a solution for that.
				</p>
			</div>
		</div>
	);
};

export default Banner;
