import { MoreVert } from "@mui/icons-material"
import { Card, CardContent, IconButton, Typography } from "@mui/material"
import { Todo } from "../../lib/types"
type TodoItemCardProps = {
	todo: Todo
}
export default function TodoItemCard({ todo }: TodoItemCardProps) {
	return (
		<Card variant='outlined' key={todo.id} style={{ marginBottom: "1rem" }}>
			<CardContent>
				<div style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
					<Typography variant='h6' key={todo.id}>
						{todo.title}
					</Typography>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
				<Typography variant='body1'>{todo.description}</Typography>
			</CardContent>
		</Card>
	)
}