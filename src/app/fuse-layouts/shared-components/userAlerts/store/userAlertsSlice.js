import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const AlertsList = [{
  type: 'info',
  title: 'Lorem ipsum dollar sit amit',
  message: 'Lorem ipsum',
  priority: 'success',
  countdown: null,
  enable: false,
}];

const userAlertsAdapter = createEntityAdapter({});

const userAlertsSlice = createSlice({
  name: 'userAlerts', initialState: userAlertsAdapter.getInitialState({
    syncing: false,
    alerts: [...AlertsList],
    userAlert: {},
  }), reducers: {
    setSyncing: {
      reducer: ( state, {payload} ) => {
        state.syncing = payload;
      },
    },
    setAlerts: {
      reducer: ( state, {payload} ) => {
        state.alerts = payload;
      },
    },
    
    setUserAlert: {
      reducer: ( state, {payload} ) => {
        state.userAlert = payload;
      },
    },
    
    closeUserAlert: ( state, action ) => {
      return false;
    },
  },
});

export const {setAlerts, setUserAlert} = userAlertsSlice.actions;

export default userAlertsSlice.reducer;
