import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";
import todoReducer from "./features/todosSlice";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: authReducer,
        todo: todoReducer,
    },
});

export default store;