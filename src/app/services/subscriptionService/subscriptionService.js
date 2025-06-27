import FuseUtils from "../../../@fuse/utils";
import jwtService from "../jwtService";
import moment from 'moment';

let timeInterval = null;

class SubscriptionService extends FuseUtils.EventEmitter {
    init() {
        //console.log('==== SUBSCRIPTION SERVICE ====');
        this.onLoginSubscriptionCheck();
        this.tokenCheck();
    }

    onLoginSubscriptionCheck = () => {
        jwtService.on("onEmailLogin", () => {
            //console.log("======== LOGIN_CHECK ======== TTL_CASE");
            this.subscriptionLiveCounter(true);
            //this.inactivityTime();
        });
    }

    tokenCheck = async () => {
        const token = await jwtService.getToken();
        const sessionToken = await jwtService.getTokenSession();
        if (sessionToken) {
            //console.log("====== SESSION_TOKEN_CHECK ======= TTL_CASE");
            this.subscriptionLiveCounter(false);
            return
        }
        if (token) {
            //console.log("====== TOKEN_CHECK ======= TTL_CASE");
            this.subscriptionLiveCounter(true);
            //this.inactivityTime();
        }

    }

    subscriptionLiveCounter = (bool) => {
        /*to test the logic uncomment the code below and also in sessionTimerAlert component*/
        //let invoiceTimestamp = +moment().add('0', "days").add('0', "hours").add('1', "minutes").format('x');

        const STORAGE_KEY = "user";
        const ALERT_BEFORE_DAYS = 15;

        const userData = JSON.parse(
            (bool ? localStorage : sessionStorage).getItem(STORAGE_KEY)
        );

        if (!userData?.invoice_due_date) return;

        const invoiceTimestamp = +userData.invoice_due_date;
        const invoiceMoment = moment(invoiceTimestamp);
        const alertStartMoment = moment(invoiceMoment).subtract(ALERT_BEFORE_DAYS, "days");

        const emitSubscriptionExpireAlert = (diffTime, remainingTime, countdownStart) => {
            this.emit("OnSubscriptionExpireAlert", {
                differenceTime: diffTime,
                remainingTime,
                countDownTime: countdownStart,
            });
        };

        const emitSubscriptionExpired = () => {
            this.emit("OnSubscriptionExpired", "Subscription Expired!!!");
            setTimeout(() => {
                this.emit("onAutoLogout", "Subscription Expired!!!");
            }, 2000);
        };

        const formatRemainingTime = (duration) => {
            return {
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
            };
        };

        const intervalId = setInterval(() => {
            const now = moment();
            const timeUntilExpiry = invoiceMoment.diff(now);
            const timeUntilAlertStart = alertStartMoment.diff(now);

            if (timeUntilExpiry <= 0) {
                clearInterval(intervalId);
                emitSubscriptionExpired();
                return;
            }

            if (timeUntilAlertStart <= 0) {
                const remainingTime = formatRemainingTime(moment.duration(invoiceMoment.diff(now)));
                emitSubscriptionExpireAlert(timeUntilExpiry, remainingTime, alertStartMoment.valueOf());
            }
        }, 60000);
    };
}

const instance = new SubscriptionService();

export default instance;
