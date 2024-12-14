import { Button, Card, CardActions, CardContent, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TodoItemCard from "../TodoItemCard";
type TodoListBoxProps = {
	list: any
}
export default function TodoListBox({ list }: TodoListBoxProps) {
	const [input, setInput] = useState("");
	const handleAddButton = () => {
		console.log(input)
	}
	const handleDeleteButton = () => { }
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
					<TextField
						value={input}
						onKeyUp={(e) => {
							if (e.key === "Enter") handleAddButton();
						}}
						onChange={(e) => { setInput(e.target.value) }}
						size='small'
						label="Add Todo"
						variant="outlined"
						fullWidth
					/>
				</CardActions>
				<CardActions>
					<Button variant='outlined' onClick={handleDeleteButton}>Delete</Button>
					<Button variant='contained' onClick={handleAddButton}>Add Todo</Button>
				</CardActions>
			</Card>
		</Grid2>
	)
}