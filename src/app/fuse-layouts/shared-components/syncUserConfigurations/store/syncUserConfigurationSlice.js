import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { showMessage } from '../../../../store/fuse/messageSlice';
import jwtService from '../../../../services/jwtService';

export const getUserConfigurationSetting = createAsyncThunk("syncUserConfiguration", async (params, {
    dispatch, getState
}) => {
    const {setting_id, token} = params;
    return jwtService.getUserSettings(setting_id, token).then((res) => {
        dispatch(showMessage({message: "User configurations updated"}));
    }).catch((error) => {
        dispatch(showMessage({message: error.message}));
    });
});

const syncUserConfigurationAdapter = createEntityAdapter({});

const syncUserConfigurationSlice = createSlice({
    name: 'syncUserConfiguration', initialState: syncUserConfigurationAdapter.getInitialState({
        syncing: false,
        personalSettings: [],
    }), reducers: {
        setSyncing: {
            reducer: (state, {payload}) => {
                state.syncing = payload;
            },
        }, setPersonalSettings: {
            reducer: (state, {payload}) => {
                state.personalSettings = payload;
            },
        }, onSyncUserConfiguration: (state, action) => {
            return !state
        }, onCreatePersonalSettings: (state, action) => {
        }
    }
});

export const {
    onSyncUserConfiguration, setSyncing, setPersonalSettings, onCreatePersonalSettings
} = syncUserConfigurationSlice.actions;

export default syncUserConfigurationSlice.reducer;
