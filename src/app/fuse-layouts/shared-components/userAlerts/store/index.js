import {combineReducers} from '@reduxjs/toolkit';
import userAlerts from './userAlertsSlice';

const reducer = combineReducers({
    userAlerts,
});
export default reducer;
