import { describe, expect, it } from "vitest"
import TodoList, { TodoItem } from "../TodoList"

describe("TodoList Tests", ()=>{
    let todoList: TodoList = new TodoList()
    todoList.title = "Test"
    
    describe("Adding new todo", ()=>{
        it("should add new todo", ()=>{
            todoList.addNewTodo("First Todo")
            expect(todoList.items.length).toBe(1)
            expect(todoList.items[0].title).toBe("First Todo")
        })
        it("should return id when adding new todo", ()=>{
            const id = todoList.addNewTodo("First Todo")
            expect(typeof id).toBe(String)
        })
    })
    describe("Getting Todos",()=>{
        it ("should get todo by id", ()=>{
            const id = todoList.addNewTodo("First Todo")
            const todo = todoList.get(id)
            expect(typeof todo).toBe(TodoItem)
        })
        it("should get only if id exists", ()=>{
            const id = todoList.addNewTodo("First Todo")
            const todo = todoList.get("____________")
            expect(typeof todo).not.toBe(TodoItem)
        })
    })
    describe("Removing todo", ()=>{
        it("should remove todo", ()=>{
            const id = todoList.addNewTodo("First Todo")
            todoList.removeTodo(id)
        })
        it("should remove all todos", ()=>{
            todoList.addNewTodo("First Todo")
            todoList.addNewTodo("Second Todo")
            todoList.removeAllTodos()
            expect(todoList.items.length).toBe(0)
        })
        it("should remove only if exists", ()=>{
            const id = todoList.addNewTodo("First Todo")
            todoList.removeTodo("____________")
            expect(todoList.items.length).toBe(1)
        })
    })
    it("should have unique id", ()=>{
        todoList.addNewTodo("First Todo")
        todoList.addNewTodo("Second Todo")
        expect(todoList.items[0].id).not.toBe(todoList.items[1].id)
    })
    it("should mark todo as completed", ()=>{
        const id = todoList.addNewTodo("First Todo")
        todoList.set(id, true) 
        expect(todoList.items[0].status).toBe(true)
    })
})