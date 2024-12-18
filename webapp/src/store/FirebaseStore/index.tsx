import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
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
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [authState, setAuthState] = useState(() =>
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				setIsLoggedIn(true);
			}
		})
	)
	const handleLogin = async (email: string, password: string) => {
		// log user in and update user+login state
		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			setIsLoggedIn(true);
			setUser(user.user);
			return user.user
		} catch (error) {
			console.log(error);
			return (error)
		}
	}
	const handleLogout = async () => {
		// log user out+update user+login state
		try {
			await signOut(auth);
			setIsLoggedIn(false);
			setUser(null);
		} catch (error) {
			console.log(error);
			return (error)
		}
	}
	const handleSignUp = async (email: string, password: string, fName: string, lName: string) => {
		// create user and update user+login state
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			await makeUserDB(user.user.uid, email, fName, lName);
			setIsLoggedIn(true);
			setUser(user.user);
			return user
		} catch (error) {
			console.log(error);
			return (error)
		}
	}
	const makeUserDB = async (id: string, email: string, fName: string, lName: string) => {
		// create user in db, this is an internal function for signup
		try {
			await setDoc(doc(db, "users", id), {
				firstname: fName,
				lastname: lName,
				email,
				todolists: []
			})
		}
	}
	const getTodoListById = async (id: string) => {
		// return a todolist object from db	
	}
	const getUserLists = async () => {
		// return an array of todolist objects
	}
	const addNewListToUserDB = async (title: string) => {
		// add new list to db
	}
	const deleteUser = async () => {
		// delete user
	}
	const deleteListById = async (id: string) => {
		// delete list from user db and the list db
	}
	const output: FirebaseContextType = {

	}
	return (
		<FirebaseContext.Provider value={output}>
			{children}
		</FirebaseContext.Provider>
	)
}