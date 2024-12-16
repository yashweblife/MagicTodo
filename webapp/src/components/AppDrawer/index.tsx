import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
type AppDrawerProps = {
	handleOpen: (state: boolean) => void,
	isOpen: boolean
}
export default function AppDrawer({ handleOpen, isOpen }: AppDrawerProps) {
	return (
		<Drawer
			anchor='left'
			open={isOpen}
			onClose={() => { handleOpen(false) }}
		>
			<List>
				<ListItem>
					<ListItemButton>
						<ListItemText>Hello</ListItemText>
					</ListItemButton>
				</ListItem>
			</List>
		</Drawer>
	)
}