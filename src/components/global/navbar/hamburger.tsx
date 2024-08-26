import React from 'react';
import Head from 'next/head';
import styles from '@/styles/component-styles/navbar.module.css';

const Hamburger: React.FC = () => {
	return (
		<div className={styles.hamburger}>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
		</div>
	);
};

export default Hamburger;
