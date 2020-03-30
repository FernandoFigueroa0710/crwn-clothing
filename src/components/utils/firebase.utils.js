import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

const config = {
	apiKey: "AIzaSyDgtHrYwOd_Q1BHc7hYpNqW_96-hqqSLgQ",
	authDomain: "crwn-clothingdb-78f02.firebaseapp.com",
	databaseURL: "https://crwn-clothingdb-78f02.firebaseio.com",
	projectId: "crwn-clothingdb-78f02",
	storageBucket: "crwn-clothingdb-78f02.appspot.com",
	messagingSenderId: "1046499830236",
	appId: "1:1046499830236:web:090fa067af330f36c64719",
	measurementId: "G-RJ39FPSGSX"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log("Error creating user", error.message);
		}
	}
	return userRef;
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => firebase.auth.signInWithPopup(provider);

export default firebase;
