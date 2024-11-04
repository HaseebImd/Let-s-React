import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/authSlice";
const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: authReducer,
    },
});

export default store;