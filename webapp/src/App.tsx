import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import useFirebase from './hooks/useFirebase';
import AuthPage from './pages/AuthPage';

type HeaderProps = {
	setDrawerOpen: (open: boolean) => void,
	setAddDialogOpen: (open: boolean) => void
}
function Header({ setDrawerOpen, setAddDialogOpen }: HeaderProps) {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton onClick={() => setDrawerOpen(true)} edge="start" color="inherit" sx={{ mr: 2 }} >
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					MagicTodo
				</Typography>
				<IconButton color="inherit" edge="end" onClick={() => setAddDialogOpen(true)}>
					<AddIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}


function App() {
	const { isLoggedIn } = useFirebase();

	if (!isLoggedIn) {
		return <AuthPage />
	}
	return (
		<div className="App">
			<Header />
		</div>
	)
}

export default App
