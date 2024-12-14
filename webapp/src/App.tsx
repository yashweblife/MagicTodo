import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Card, CardActions, CardContent, Grid2, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import useFirebase from './hooks/useFirebase';
import AuthPage from './pages/AuthPage';

type HeaderProps = {
	setDrawerOpen: (open: boolean) => void,
	setAddDialogOpen: (open: boolean) => void
	username: string
}
function MainAppHeader({ setDrawerOpen, setAddDialogOpen, username }: HeaderProps) {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton onClick={() => setDrawerOpen(true)} edge="start" color="inherit" sx={{ mr: 2 }} >
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					MagicTodo
				</Typography>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Welcome {username}!
				</Typography>
				<IconButton color="inherit" edge="end" onClick={() => setAddDialogOpen(true)}>
					<AddIcon />
					<Typography>Card</Typography>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}
function NoTodosView() {
	return (
		<div style={{
			height: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		}}>
			<Paper
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					padding: "2rem"
				}}
			>
				<Typography variant="h4" color='text.secondary'>
					You have no todos
				</Typography>
				<Button variant='contained'>Add One</Button>
			</Paper>
		</div>
	)
}

function TodoItemCard({ todo }: { todo: any }) {
	return (
		<Card variant='outlined' key={todo.id} style={{ marginBottom: "1rem" }}>
			<CardContent>
				<Typography variant='h6' key={todo.id}>{todo.title}</Typography>
				<Typography variant='body1'>{todo.description}</Typography>
			</CardContent>
		</Card>
	)
}

function TodoListBox({ list }: { list: any }) {
	return (
		<Grid2 key={list.id} size={3}>
			<Card variant='outlined'>
				<CardContent>
					<Typography variant='h5'>{list.title}</Typography>
				</CardContent>
				<CardContent>
					{
						list.todos.length === 0 ?
							<Typography>No Todos</Typography> :
							list.todos.map((todo: any) =>
								<TodoItemCard key={todo.id} todo={todo} />
							)
					}
				</CardContent>
				<CardActions>
					<TextField size='small' label="Add Todo" variant="outlined" fullWidth />
				</CardActions>
				<CardActions>
					<Button variant='outlined'>Delete</Button>
					<Button variant='contained'>Add Todo</Button>
				</CardActions>
			</Card>
		</Grid2>
	)
}
function TodoListsView({ lists }: { lists: any[] }) {
	return (
		<Grid2 container spacing={2} style={{ width: "100%", padding: "2rem" }}>
			{
				lists.map((list: any) => <TodoListBox key={list.id} list={list} />)
			}
		</Grid2>
	)
}
function App() {
	const { isLoggedIn, user, handleLogout, getUserData } = useFirebase();
	const [userDBValue, setUserDBValue] = useState<any>(null);
	const test_list = [{
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
