import {combineReducers} from '@reduxjs/toolkit';
import syncUserConfiguration from './syncUserConfigurationSlice';

const reducer = combineReducers({
    syncUserConfiguration,
});
export default reducer;
