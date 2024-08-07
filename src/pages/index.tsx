import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';

// components
import Navbar from '@/components/home/navbar';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar></Navbar>
			<div className={styles.mainContent}>
				<img
					className={styles.landingImage}
					src="https://placehold.co/600x800"
					alt="placeholder image"
				/>
				<div className={styles.landingText}>
					<h1 className={styles.landingTitle}>
						THE{' '}
						<span className={styles.largeUnderline}>PERFECT</span>
						<br />
						<span className={styles.largeText}>MANAGEMENT</span>
						<br />
						APP FOR CLUBS
					</h1>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<footer>
				<p>&copy; 2024 mySchoolClub</p>
			</footer>
		</>
	);
};

export default Home;
