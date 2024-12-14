import { useEffect, useState } from 'react';
import MainAppHeader from './components/MainAppHeader';
import NoTodosView from './components/NoTodosView';
import TodoListsView from './components/TodoListsView';
import useFirebase from './hooks/useFirebase';
import AuthPage from './pages/AuthPage';

const test = [{
	id: "1",
	title: "Todos",
	date: "2022-01-01",
	todos: [
		{
			id: "1",
			title: "Todo 1",
			description: "Description 1",
			status: false
		},
		{
			id: "2",
			title: "Todo 2",
			description: "Description 2",
			status: false
		}
	]
},
{
	id: "2",
	title: "In Progress",
	date: "2022-01-01",
	todos: []
}
]

function App() {
	const { isLoggedIn, user, handleLogout, getUserData } = useFirebase();
	const [userDBValue, setUserDBValue] = useState<any>(null);
	const [test_list, setTestList] = useState<any>(test);
	useEffect(() => {
		if (user) {
			getUserData(user.uid).then((val) => {
				setUserDBValue(val);
			})
		}
	}, [user, isLoggedIn])
	return (
		!isLoggedIn ? <AuthPage /> :
			<div className="App" style={{ height: "100vh" }}>
				<MainAppHeader setDrawerOpen={() => { }} username={userDBValue?.firstname} setAddDialogOpen={() => { }} />
				{
					test_list.length > 0 ?
						<TodoListsView lists={test_list} /> :
						<NoTodosView />
				}
			</div>
	)
}

export default App
