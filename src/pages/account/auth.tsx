import React from 'react';
import SignIn from '@/components/account/SignIn';
import Head from 'next/head';
import Navbar from '@/components/global/navbar/navbar';
import Footer from '@/components/global/footer';

const LogIn: React.FC = () => {
	return (
		<>
			<Head>
				<title>Authorize | mySchoolClub</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<SignIn />
			<br />
			<br />
			<Footer />
		</>
	);
};

export default LogIn;
