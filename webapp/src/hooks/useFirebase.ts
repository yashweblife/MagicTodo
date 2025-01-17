import { initializeApp } from "@firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from "@firebase/auth";
import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { FirebaseUser, Todo, TodoList } from "../lib/types";
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_KEY,
	authDomain: "themagictodo.firebaseapp.com",
	projectId: "themagictodo",
	storageBucket: "themagictodo.firebasestorage.app",
	messagingSenderId: "1015187498055",
	appId: "1:1015187498055:web:a0d9cf8c92a20d4d9abd62"
};

export default function useFirebase() {
	const app = initializeApp(firebaseConfig);
	const auth = getAuth(app);
	const db = getFirestore(app);
	const [user, setUser] = useState<User | null>(auth.currentUser);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setIsLoggedIn(true);
			setUser(user);
		}
	})
	useEffect(() => {
		if (user) {
			setIsLoggedIn(true)
		}
	}, [user])
	const handleLogin = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setIsLoggedIn(true);
			setUser(auth.currentUser);
			console.log("logged in", user?.email, isLoggedIn)
			return auth.currentUser
		} catch (error) {
			console.log(error);
			return (error)
		}
	}
	const handleLogout = () => {
		return signOut(auth);
	}
	const handleSignUp = async (email: string, password: string, fName: string, lName: string) => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			await makeUserDB(user.user.uid, email, fName, lName);
			setIsLoggedIn(true);
			setUser(user.user);
			return user
		} catch (error) {
			console.log(error);
		}
	}
	const makeUserDB = async (id: string, email: string, fName: string, lName: string) => {
		await setDoc(doc(db, "users", id), {
			firstname: fName,
			lastname: lName,
			email,
			todolists: []
		})
	}
	const getUserData = async (id: string) => {
		const docRef = doc(db, "users", id);
		const docSnap = await getDoc(docRef);
		return docSnap.data() as FirebaseUser;
	}
	const addNewListToUserDB = async (name: string) => {
		if (!user) return "";
		try {
			const docRef = collection(db, "todos");
			const docSnap = await addDoc(docRef, {
				name,
				items: [],
				ownmer: user.uid
			})
			return docSnap.id;
		} catch (error) {
			console.log(error);
		}
	}
	const addNewTodoToTodoListDB = async (listId: string, todo: Todo) => {
		if (!user) return "";
		try {
			const docRef = doc(db, "todos", listId);
			await setDoc(docRef, todo, { merge: true });
			return todo.id
		} catch (error) {
			console.log(error);
		}
	}
	const removeListFromUserDB = async (userId: string, listId: string) => {

	}
	const removeTodoFromTodoListDB = async (listId: string, todoId: string) => {

	}
	const updateTodoInTodoListDB = async (listId: string, todoId: string, todo: any) => {

	}
	const updateListInTodoListDB = async (listId: string, list: any) => {

	}
	const getListById = async (id: string): Promise<TodoList | null> => {
		const output = await getDoc(doc(db, "todos", id))
		if (output.exists()) { return output.data() as TodoList }
		return null
	}
	return {
		isLoggedIn,
		user,
		getListById,
		handleLogin,
		handleLogout,
		handleSignUp,
		getUserData,
		addNewListToUserDB,
		addNewTodoToTodoListDB,
		removeListFromUserDB,
		removeTodoFromTodoListDB,
		updateTodoInTodoListDB,
		updateListInTodoListDB
	}
}