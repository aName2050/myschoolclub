import React from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.css';

// components
import Navbar from '@/components/home/navbar';
import Image from 'next/image';
import Footer from '@/components/home/footer';

const Home: React.FC = () => {
	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar></Navbar>
			<div className={styles.mainContent}>
				<h1 className={styles.landingTitle}>
					THE <span className={styles.largeUnderline}>PERFECT</span>
					<br />
					<span className={styles.largeText}>MANAGEMENT</span>
					<br />
					APP FOR CLUBS
				</h1>
			</div>
			<br />
			<br />
			<br />
			<Footer></Footer>
		</>
	);
};

export default Home;
