import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import withReducer from "../../../store/withReducer";
import reducer from "../activityDialogue/store";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {memo, useEffect, useState} from "react";
import {closeActivityDialogue, openActivityDialogue, toggleActivityDialogue} from "./store/stateSlice";
import {logoutUser} from "../../../auth/store/userSlice";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../../../../@fuse/hooks/useLocalStorage";
import {showMessage} from "../../../store/fuse/messageSlice";

function ActivityDialog() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(({activityDialog}) => activityDialog?.state);
    const [password, setPassword] = useState(null);
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwt_access_token"));

    let token = null;
    useEffect(() => {
        if (state) {
            localStorage.removeItem("jwt_access_token");
        }
    }, [state, jwtToken]);

    useEffect(() => {
        if (state) {
            dispatch(closeActivityDialogue());
        }
    }, [dispatch]);

    const onCancel = () => {
        dispatch(closeActivityDialogue());
        dispatch(logoutUser());
        navigate('/login');
    }

    const onClose = () => {
        dispatch(showMessage({message: "Type password to re-active"}));
    };

    const onVerifyLogin = () => {
        console.log("===== call api of token verify =====");
    }

    return (
        <Dialog open={state} onClose={onClose}>
            <DialogTitle>Verify your identity</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Due to long inactivity you need to type password and hit login to access portal
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button onClick={onVerifyLogin}>Login</Button>
            </DialogActions>
        </Dialog>
    );
}

export default withReducer('activityDialog', reducer)(memo(ActivityDialog));
