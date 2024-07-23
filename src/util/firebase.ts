import { initializeApp } from 'firebase/app';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import firebaseConf from '../../config/firebase.conf.json';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: firebaseConf.apiKey,
	authDomain: firebaseConf.authDomain,
	projectId: firebaseConf.projectId,
	storageBucket: firebaseConf.storageBucket,
	messagingSenderId: firebaseConf.messagingSenderId,
	appId: firebaseConf.appId,
	measurementId: firebaseConf.measurementId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();
export const analytics = initAnalytics();

async function initAnalytics() {
	if (typeof window !== 'undefined' && (await isSupported())) {
		return getAnalytics(app);
	}
}

export const SignInWithGoogle = () => signInWithPopup(auth, authProvider);

export const logOut = () => signOut(auth);
