import { Button, Card, CardActions, CardContent, Grid2, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { TodoList } from "../../lib/types";
import { ListContext } from "../../store/ListsStore";
import TodoItemCard from "../TodoItemCard";
type TodoListBoxProps = {
	list: TodoList
}
export default function TodoListBox({ list }: TodoListBoxProps) {
	const [input, setInput] = useState("");
	const { addTodoToList, lists } = useContext(ListContext);
	useEffect(() => {
		console.log(lists)
	}, [])
	const handleAddButton = () => {
		if (input === "") return
		const newTodo = {
			id: "",
			title: input,
			description: "",
			status: false
		}
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