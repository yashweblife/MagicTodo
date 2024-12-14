import { Grid2 } from "@mui/material"
import TodoListBox from "../TodoListBox"

type TodoListsViewProps = {
	lists: any[]
}
export default function TodoListsView({ lists }: TodoListsViewProps) {
	return (
		<Grid2 container spacing={2} style={{ width: "100%", padding: "2rem" }}>
			{
				lists.map((list: any) => <TodoListBox key={list.id} list={list} />)
			}
		</Grid2>
	)
}