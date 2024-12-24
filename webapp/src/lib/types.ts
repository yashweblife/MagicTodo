export type Todo = {
	id: string
	title: string
	description: string
	status: boolean
}

export type TodoList = {
	id: string
	title: string
	date: string
	todos: Todo[]
}

export type FirebaseUser = {
	id: string
	firstname: string
	lastname: string
	email: string
	todolists: string[]
}