import { Todo } from "./types"
import { generateID } from "./utils"

export class TodoItem {
	id: string = generateID()
	constructor(public title: string, public description?: string) {

	}
}

export default class TodoList {
	title: string = ""
	id: string = ""
	items: Todo[] = []
	constructor() { }
	addNewTodo(title: string) {
		const id = generateID()
		this.items.push({ id, title, description: "", status: false })
		return this
	}
	removeTodo(id: string) {
		this.items = this.items.filter((item) => item.id !== id)
		return this
	}
	static fromDB(data: any) { }
}