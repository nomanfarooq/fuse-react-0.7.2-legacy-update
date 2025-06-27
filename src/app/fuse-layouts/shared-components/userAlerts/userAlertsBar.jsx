import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import withReducer from 'app/store/withReducer';
import reducer from './store';
import {Alert, Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import moment from "moment";
import {setAlerts} from "./store/userAlertsSlice";
import FuseCountdown from "../../../../@fuse/core/FuseCountdown/FuseCountdown";
import {closeSessionTimerAlert} from "../sessionTimerAlert/store/stateSlice";
import {logoutUser} from "../../../auth/store/userSlice";

import i18next from 'i18next'
import en from './i18n/en'
import ar from './i18n/ar'

import {useTranslation} from "react-i18next";

i18next.addResourceBundle('en', 'userAlerts', en)
i18next.addResourceBundle('ar', 'userAlerts', ar)

function UserAlertsBar(props) {
    const {t} = useTranslation("userAlerts");
    const dispatch = useDispatch();
    const {alerts, userAlert} = useSelector(({userAlerts}) => userAlerts?.userAlerts);
    const [showBanner, setShowBanner] = useState(true);

    /*useEffect(() => {
        //temp code
        localStorage.setItem("sa_fifa_ad", false);
        setTimeout(() => {
            const alertsArr = [...alerts];
            const index = alertsArr.findIndex(item => item.enable === true);
            if (index !== -1) {
                alertsArr[index] = {...alertsArr[index], enable: false};
                dispatch(setAlerts(alertsArr));
                localStorage.setItem("sa_fifa_ad", true);
            }
        }, 30000);
    }, []);*/

    const onGetAlertColorByPriority = (priority) => {
        switch (priority) {
            case "low" :
                return {severity: "info", color: "secondary"};
            case "medium" :
                return {severity: "warning", color: "warning"};
            case "high" :
                return {severity: "danger", color: "error"};
            case "success" :
                return {severity: "success", color: "success"};
        }
    }

    const onGetLeftDays = (timeStamp) => {
        const duration = moment.duration(+moment().diff(timeStamp));
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();
        return `${Math.abs(days)} days, ${Math.abs(hours)} hours, ${Math.abs(minutes)} minutes`;
    }

    const onCompleteCountDown = () => {
        console.log('ON_COMPLETE_COUNT_DOWN');
    }

    return (<>
        {userAlert?.enable && (
            <Alert variant="filled" severity={onGetAlertColorByPriority(userAlert?.priority)?.severity}
                   color={onGetAlertColorByPriority(userAlert?.priority)?.color}
                   action={userAlert?.countdown?.remainingTime &&
                       <Typography
                           className="text-14 font-semibold">{`${t('REMAINING')} ${userAlert?.countdown?.remainingTime?.days} ${t('DAYS')} ,
                           ${userAlert?.countdown?.remainingTime?.hours} ${t('HOURS')} ,
                           ${userAlert?.countdown?.remainingTime?.minutes} ${t('MINUTES')}`}</Typography>}
                   className="items-center rounded-none py-4">
                <Box className="flex items-center">
                    <Box>
                        <Typography className="text-14 font-semibold"> {t('SUBSCRIPTION_TITLE')} </Typography>
                        <Typography className="text-14 font-semibold">
                            {t('SUBSCRIPTION_MESSAGE')}
                        </Typography>
                    </Box>
                    {/*<FuseCountdown endDate={1745175600000} className="my-0" onComplete={() => onCompleteCountDown()}/>*/}
                </Box>
            </Alert>
        )}

        {alerts?.length > 0 && alerts
            ?.filter(item => item?.enable)
            ?.map((item, idx) => (
                <Alert key={idx} variant="filled" severity={onGetAlertColorByPriority(item?.priority)?.severity}
                       color={onGetAlertColorByPriority(item?.priority)?.color}
                       action={item?.countdown &&
                           <Typography
                               className="text-14 font-semibold">{`Remaining ${onGetLeftDays(item?.countdown)}`}</Typography>}
                       className="items-center rounded-none py-4">
                    <Box className="flex items-center">
                        <Box>
                            <Typography className="text-14 font-semibold"> {item?.title} </Typography>
                            <Typography className="text-14 font-semibold">
                                {item?.message}
                            </Typography>
                        </Box>
                        <Box className="ml-auto">
                            <img src="https://cdn.pixabay.com/animation/2023/11/14/18/29/18-29-42-564_512.gif"
                                 height="64"
                                 width="64" alt=""/>
                        </Box>
                        <Box className="ml-auto">
                            <img
                                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhV3q-b7LWKQHej259QX2qoGqaHtd9AUtMVpHSe25FY1OZa4hHzGJbAEsAxCP8pbLUUHZtWFNADfr7edpfWK4ON9eHCkLBGPw_CohzkOu-X_mHLtdaxpTLbzQpv0mduAKGZBan5YSNG0PA/s0/Flag_of_Saudi_Arabia.gif"
                                width="48"
                                alt=""/>
                        </Box>
                    </Box>
                </Alert>))}
    </>);
}

export default withReducer('userAlerts', reducer)(UserAlertsBar);
