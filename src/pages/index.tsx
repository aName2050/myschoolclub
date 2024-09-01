import React from 'react';
import Head from 'next/head';

// components
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';
import Banner from '@/components/landing/banner';
import InfoSeg from '@/components/landing/infoseg';

// styles
import styles from '@/styles/landing.module.css';

const Home: React.FC = () => {
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
				imageSrc=""
				imageAlt="no image"
				imageSize={{ width: 300, height: 200 }}
			>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
				nobis non deserunt voluptates harum aut, placeat reiciendis
				ipsum iste facere sequi vero, iusto mollitia ipsa. Perferendis
				eligendi rem numquam nam.
			</InfoSeg>
			<br />
			<br />
			<Footer />
		</>
	);
};

export default Home;
