import React from 'react';
import Head from 'next/head';

// components
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';
import Banner from '@/components/landing/banner';
import InfoSeg from '@/components/landing/infoseg';

// styles
import styles from '@/styles/landing.module.css';
import Button from '@/components/global/button';

const Home: React.FC = () => {
	const getStartedBtn = () => {
		location.pathname = '/account/auth';
	};

	return (
		<>
			<Head>
				<title>mySchoolClub</title>
			</Head>
			<Navbar />
			<Banner />
			<div id="main"></div>
			<br />
			<br />
			<InfoSeg
				imagePos="left"
				imageSrc="https://static-00.iconduck.com/assets.00/qr-code-illustration-2048x1668-wseobvx0.png"
				imageAlt="guy scanning qr code on giant phone"
				imageSize={{ width: 500, height: 450 }}
			>
				<h1 className={styles.header}>
					Identify members and share forms with only a QR code!
				</h1>
				<h3 className={styles.subheader}>
					Members can create a QR code for their profile for easy
					scanning and clubs can share QR codes that link to sign-up
					forms.
				</h3>
			</InfoSeg>
			<br />
			<br />
			<InfoSeg
				imagePos="right"
				imageSrc="https://static.vecteezy.com/system/resources/previews/021/468/870/original/man-thinks-holds-clipboard-pen-in-hands-png.png"
				imageAlt="man holding clipboard"
				imageSize={{ width: 400, height: 500 }}
			>
				<h1 className={styles.header}>
					Schedule meetings for your board and members with ease.
				</h1>
				<h2 className={styles.subheader}></h2>
			</InfoSeg>
			<br />
			<br />
			<br />
			<h2 className={styles.header}>So what are you waiting for?</h2>
			<br />
			<div className={styles.btnContainer}>
				<Button
					label="Get started"
					onClick={getStartedBtn}
					className={styles.getStartedBtn}
				/>
			</div>
			<br />
			<br />
			<br />
			<Footer />
		</>
	);
};

export default Home;
