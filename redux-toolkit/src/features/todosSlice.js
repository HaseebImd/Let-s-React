import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
})
const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        isLoading: false,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
            console.log("Loading", state.isLoading);
            console.log("action", action)
            console.log("data", state.todos);

        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
            console.log("Loading", state.isLoading);
            console.log("action", action)
            console.log("data", state.todos);
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.isLoading = false;
            console.log("Loading", state.isLoading);
            console.log("action", action)
            console.log("data", state.todos);
        });
    }
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;