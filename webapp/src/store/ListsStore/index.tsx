import { createContext, ReactNode, useState } from "react";
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
	const initiaizeLists = async () => {

	}
	const addNewList = async (name: string) => {

	}
	const addTodoToList = async (listId: string, todo: Todo) => {
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