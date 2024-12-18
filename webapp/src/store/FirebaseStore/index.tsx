import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createContext, ReactNode, useState } from "react";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: "themagictodo.firebaseapp.com",
	projectId: "themagictodo",
	storageBucket: "themagictodo.firebasestorage.app",
	messagingSenderId: "1015187498055",
	appId: "1:1015187498055:web:a0d9cf8c92a20d4d9abd62"
};

type FirebaseContextType = {}

export const FirebaseContext = createContext<FirebaseContextType>({});

export default function FirebaseStoreProvider({ children }: { children: ReactNode }) {
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);
	const [user, setUser] = useState<User | null>(auth.currentUser);
	const [authState, setAuthState] = useState(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		})
	)
	const output: FirebaseContextType = {

	}
	return (
		<FirebaseContext.Provider value={output}>
			{children}
		</FirebaseContext.Provider>
	)
}