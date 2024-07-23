import React from 'react';
import { SignInWithGoogle, logOut } from '../../util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../util/firebase';

const SignIn: React.FC = () => {
	const [user, loading, error] = useAuthState(auth);

	const handleSignIn = async () => {
		try {
			await SignInWithGoogle();
		} catch (error) {
			console.error('Unable to sign in with Google', error);
		}
	};

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.error('Unable to sign out', error);
		}
	};

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error.message}</p>}
			{user ? (
				<div>
					<p>Welcome, {user.displayName}</p>
					<button onClick={handleSignOut}>Sign out</button>
				</div>
			) : (
				<button onClick={handleSignIn}>Sign In With Google</button>
			)}
		</div>
	);
};

export default SignIn;
