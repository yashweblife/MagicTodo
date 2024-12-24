import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type MainAppHeaderProps = {
	setDrawerOpen: (open: boolean) => void,
	handleAddDialogOpen: (open: boolean) => void
	username: string
}

export default function MainAppHeader({ setDrawerOpen, handleAddDialogOpen, username }: MainAppHeaderProps) {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton onClick={() => { setDrawerOpen(true) }} edge="start" color="inherit" sx={{ mr: 2 }} >
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					MagicTodo
				</Typography>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Welcome {username}!
				</Typography>
				<IconButton color="inherit" edge="end" onClick={() => handleAddDialogOpen(true)}>
					<AddIcon />
					<Typography>Card</Typography>
				</IconButton>
			</Toolbar>
		</AppBar>
	)
}