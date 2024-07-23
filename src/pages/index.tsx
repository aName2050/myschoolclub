import React from 'react';
import SignIn from '@/components/SignIn';

const Home: React.FC = () => {
	return (
		<div>
			<h1>Welcome to MySchoolClub</h1>
			<p>
				The best app for managing clubs, boards, and events in school.
			</p>
			<SignIn />
		</div>
	);
};

export default Home;
