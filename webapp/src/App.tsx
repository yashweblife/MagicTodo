import { useEffect, useState } from 'react';
import AppDrawer from './components/AppDrawer';
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
	const { isLoggedIn, user, handleLogout, getUserData, addNewListToUserDB } = useFirebase();
	const [userDBValue, setUserDBValue] = useState<any>(null);
	const [test_list, setTestList] = useState<any>(test);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [addDialogOpen, setAddDialogOpen] = useState(false);
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
				<MainAppHeader setDrawerOpen={setDrawerOpen} username={userDBValue?.firstname} handleAddDialogOpen={setAddDialogOpen} />
				{
					test_list.length > 0 ?
						<TodoListsView lists={test_list} /> :
						<NoTodosView />
				}
				<AppDrawer isOpen={drawerOpen} handleOpen={setDrawerOpen} />
				{/* <Menu anchorEl={null} open={addDialogOpen} onClose={() => setAddDialogOpen(false)}>
					<List>
						<ListItem>
							<Typography>Add List</Typography>
						</ListItem>
					</List>
				</Menu> */}
			</div>
	)
}

export default App
