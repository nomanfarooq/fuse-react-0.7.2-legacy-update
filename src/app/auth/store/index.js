import {combineReducers} from '@reduxjs/toolkit';
import login from './loginSlice';
import register from './registerSlice';
import user from './userSlice';
import socket from './socketSlice';

const authReducers = combineReducers({
    user,
    login,
    register,
    socket,
});

export default authReducers;
