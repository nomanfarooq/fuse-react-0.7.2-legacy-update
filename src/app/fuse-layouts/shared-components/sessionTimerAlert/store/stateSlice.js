import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';

const sessionTimerAlertAdapter = createEntityAdapter({});

const stateSlice = createSlice({
    name: 'sessionTimerAlert/state',
    initialState: false,
    /*initialState: sessionTimerAlertAdapter.getInitialState({
        timer: {},
    }),*/
    reducers: {
        setSessionTimer: {
            reducer: (state, {payload}) => {
                console.log(payload, 'check setSessionTimer is calling');
                state.timer = payload;
            }
        },
        toggleSessionTimerAlert: (state, action) => {
            console.log('check toggleSessionTimerAlert is calling');
            return !state
        },
        openSessionTimerAlert: (state, action) => {
            console.log('check openSessionTimerAlert is calling');
            return true
        },
        closeSessionTimerAlert: (state, action) => {
            console.log('check closeSessionTimerAlert is calling');
            return false
        },
    },
});

export const {setSessionTimer, toggleSessionTimerAlert, openSessionTimerAlert, closeSessionTimerAlert} =
    stateSlice.actions;

export default stateSlice.reducer;
