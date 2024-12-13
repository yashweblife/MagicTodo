import { createContext, ReactNode, useEffect, useState } from "react";


type List = {
    id: string;
    title: string;
    date: string;
    todos: [];
}

type ListStoreContextProps = {
    lists: List[];
    getLists: () => void;
    addList: (list: List) => void;
    updateList: (list: List) => void;
    deleteList: (list: List) => void;
}



export const ListsStoreContext = createContext<ListStoreContextProps>({
    lists: [],
    getLists: () => { },
    addList: () => { },
    updateList: () => { },
    deleteList: () => { }
})

export default function ListsStoreProvider({ children }: { children: ReactNode }) {
    const [lists, setLists] = useState<List[]>([]);

    useEffect(() => {
    }, [])
    const getLists = () => {

    }

    const addList = (list: List) => {
        setLists([...lists, list])
    }

    const updateList = (list: List) => {

    }

    const deleteList = (list: List) => {

    }

    const output: ListStoreContextProps = {
        lists,
        getLists,
        addList,
        updateList,
        deleteList
    }
    return (
        <ListsStoreContext.Provider value={output}>
            {children}
        </ListsStoreContext.Provider>
    )
}