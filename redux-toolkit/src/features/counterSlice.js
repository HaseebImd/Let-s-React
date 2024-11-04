import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
        userAction: '',
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.userAction = 'increment'
        },
        decrement: (state) => {
            state.value -= 1;
            state.userAction = 'decrement'
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;