import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/component-styles/logo.module.css';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			{/* TODO: replace with logo */}
			<h1>
				<Link className={`${styles.link} ${styles.logoLink}`} href="/">
					mySchoolClub
				</Link>
			</h1>
		</div>
	);
};

export default Logo;
