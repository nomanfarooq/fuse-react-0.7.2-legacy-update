import {createSlice} from '@reduxjs/toolkit';

const stateSlice = createSlice({
    name: 'activityDialogue/state',
    initialState: false,
    reducers: {
        toggleActivityDialogue: (state, action) => {
            console.log('check toggleActivityDialogue is calling');
            return !state
        },
        openActivityDialogue: (state, action) => {
            console.log('check openActivityDialogue is calling');
            return true
        },
        closeActivityDialogue: (state, action) => {
            console.log('check closeActivityDialogue is calling');
            return false
        },
    },
});

export const {toggleActivityDialogue, openActivityDialogue, closeActivityDialogue} =
    stateSlice.actions;

export default stateSlice.reducer;
