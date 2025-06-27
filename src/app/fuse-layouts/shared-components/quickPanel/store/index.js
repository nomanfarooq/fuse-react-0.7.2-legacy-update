import { combineReducers } from '@reduxjs/toolkit';
import data from './dataSlice';
import state from './stateSlice';

const reducer = combineReducers({
  //quick panel
  data,
  state,
});
export default reducer;
