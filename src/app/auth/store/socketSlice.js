import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    success: false,
    errors: [],
};

const socketSlice = createSlice({
    name: 'auth/socket',
    initialState,
    reducers: {
        socketSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        socketError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },
});

export const { socketSuccess, socketError } = socketSlice.actions;

export default socketSlice.reducer;
