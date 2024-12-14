import { Paper, Typography, Button } from "@mui/material";

export default function NoTodosView() {
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