import {createSlice, nanoid} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState : {
        todos: [{id:1, text: "Welcome to the Todos.com"}]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
             state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.find((todo) => todo.text === action.payload.text)
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions

export default todoSlice.reducer