import * as React from 'react';
import {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import withReducer from "../../../store/withReducer";
import reducer from "../sessionTimerAlert/store";
import {closeSessionTimerAlert} from "./store/stateSlice";
import {logoutUser} from "../../../auth/store/userSlice";
import {useNavigate} from "react-router-dom";
import {showMessage} from "../../../store/fuse/messageSlice";
import {Alert, Box, Button, TextField} from "@mui/material";
import FuseCountdown from "../../../../@fuse/core/FuseCountdown";
import Typography from "@mui/material/Typography";
import moment from "moment";

function SessionTimerAlert() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector(({sessionTimerAlert}) => sessionTimerAlert?.state);
    const [countDownTime, setCountDownTime] = useState(null);

    const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwt_access_token"));
    const [password, setPassword] = useState(null);

    useEffect(() => {
        //console.log(state, "==== state end time====");
        const userData = JSON.parse(localStorage.getItem("user"));
        const sessionTtl = userData?.ttl;
        //let sessionTtl = +moment().add('4', "minutes").format('x');
        const TenMinsBeforeTtl = +moment(sessionTtl).subtract('10', "minutes").format('x');
        if (state) {
            setCountDownTime(TenMinsBeforeTtl);
            localStorage.removeItem("jwt_access_token");
        }
    }, [state, jwtToken]);

    useEffect(() => {
        if (state) {
            dispatch(closeSessionTimerAlert());
        }
    }, [dispatch]);

    const onCompleteCountDown = () => {
        dispatch(closeSessionTimerAlert());
        dispatch(logoutUser());
        navigate('/login');
    }

    const onVerifyLogin = () => {
        console.log("===== call api of token verify =====");
    }

    return (<>
        {state && (<Alert variant="filled" severity="warning" color="primary" className="items-center rounded-none py-4"
                          action={<Button color="inherit" onClick={() => onVerifyLogin()}>
                              Login
                          </Button>}>
            <Box className="flex items-center justify-center">
                <Typography className="text-16 truncate">
                    Login session is expiring soon
                </Typography>
                {countDownTime && (<Box>
                    <FuseCountdown endDate={countDownTime} className="my-0" onComplete={() => onCompleteCountDown()}/>
                </Box>)}
                {/*<Box className="ml-auto">
                            <TextField
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                fullWidth
                                variant="filled"
                                onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                            />
                        </Box>*/}
            </Box>
        </Alert>)}
    </>);
}

export default withReducer('sessionTimerAlert', reducer)(memo(SessionTimerAlert));
