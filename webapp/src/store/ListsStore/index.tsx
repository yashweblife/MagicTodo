import { createContext, ReactNode, useEffect, useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { Todo, TodoList } from "../../lib/types";
type ListContextType = {
	lists: TodoList[],
	addNewList: (name: string) => void,
	addTodoToList: (listId: string, todo: Todo) => void
}
export const ListContext = createContext<ListContextType>({
	lists: [],
	addNewList: () => { },
	addTodoToList: () => { }
})

export default function ListContextProvider({ children }: { children: ReactNode }) {
	const { user, getUserData, addNewListToUserDB, addNewTodoToTodoListDB, getListById } = useFirebase();
	const [lists, setLists] = useState<TodoList[]>([]);
	useEffect(() => {
		if (user) {
			console.log(1)
			initiaizeLists().then((val) => {
				console.log(val)
				setLists(val)
			})
		}
	}, [user])
	const initiaizeLists = async () => {
		let newLists: TodoList[] = []
		if (user) {
			getUserData(user.uid).then((val) => {
				if (val.todolists.length > 0) {
					val.todolists.forEach((listId: string) => {
						getListById(listId).then(val => {
							if (val) {
								newLists.push(val)
							}
						})
					})
				}
			})
		}
		console.log(newLists)
		return newLists
	}
	const addNewList = async (name: string) => {
		const listId = await addNewListToUserDB(name)
		if (listId) {
			setLists([...lists, { id: listId, title: name, date: new Date().toString(), todos: [] }])
		}
	}
	const addTodoToList = async (listId: string, todo: Todo) => {
		const todoId = await addNewTodoToTodoListDB(listId, todo)
		if (todoId) {
			const updatedLists = lists.map(list => {
				if (list.id === listId) {
					return {
						...list,
						todos: [...list.todos, { ...todo, id: todoId }]
					}
				}
				return list
			})
			setLists(updatedLists)
		}
	}
	const output = {
		lists,
		addNewList,
		addTodoToList
	}
	return (
		<ListContext.Provider value={output}>
			{children}
		</ListContext.Provider>
	)
}