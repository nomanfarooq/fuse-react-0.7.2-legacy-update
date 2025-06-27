import FuseUtils from "../../../@fuse/utils";
import jwtService from "../jwtService";
import moment from 'moment';

let timeInterval = null;

class ActivityService extends FuseUtils.EventEmitter {
    init() {
        //console.log('==== ACTIVITY SERVICE ====');
        this.loginCheck();
        this.tokenCheck();
        this.onPageView();
    }

    onPageView = () => {
        let pageEvents = ['pageshow'];
        pageEvents.forEach((name) => {
            window.addEventListener(name, () => onVerifyTtl(name), true);
        });

        const onAutoLogout = () => {
            return this.emit("onAutoLogout", "Invalid Auth Token");
        }

        async function onVerifyTtl(event) {
            //console.log(event, '====== PAGE_SHOW_DETECTED ======');
            const userData = JSON.parse(localStorage.getItem("user"));
            const sessionTimestamp = userData?.ttl;
            const currentTimestamp = +moment().format('x');
            if (currentTimestamp >= sessionTimestamp) {
                return onAutoLogout();
            }
        }
    }

    tokenCheck = async () => {
        const token = await jwtService.getToken();
        const sessionToken = await jwtService.getTokenSession();
        if (sessionToken) {
            //console.log("====== SESSION_TOKEN_CHECK ======= TTL_CASE");
            this.liveCounter(false);
            return
        }
        if (token) {
            //console.log("====== TOKEN_CHECK ======= TTL_CASE");
            this.liveCounter(true);
            //this.inactivityTime();
        }

    }

    loginCheck = () => {
        jwtService.on("onEmailLogin", () => {
            //console.log("======== LOGIN_CHECK ======== TTL_CASE");
            this.liveCounter(true);
            //this.inactivityTime();
        });
    }

    liveCounter = (bool) => {
        let userData = bool ? JSON.parse(localStorage.getItem("user")) : JSON.parse(sessionStorage.getItem("user"));
        let ttl = userData?.ttl;

        var duration = moment.duration(moment(ttl).diff(+moment()));
        var hoursLeft = duration.asHours().toFixed(0);

        bool && console.log("TTL_CASE_LOCAL ==>", +hoursLeft);
        !bool && console.log("TTL_CASE_SESSION ==>", +hoursLeft);

        /*to test the logic uncomment the code below and also in sessionTimerAlert component*/
        //let ttl = +moment().add('4', "minutes").format('x');
        const remove10Mins = +moment(ttl).subtract('10', "minutes").format('x');
        const countDownDate = new Date(ttl).getTime();
        const countDown = new Date(remove10Mins).getTime();

        const onTokenExpireAlert = (differenceDialogue) => {
            return this.emit("OnTokenExpireAlert", differenceDialogue);
        }

        /*
        * @param: (number) Alert timer
        * @title: Token expiring after 10 mins
        * @desc : Token will be expire strict 10 mins
        * */
        const onTokenExpired = (timer) => {
            //console.log(timer, '====== timer ======');
            setTimeout(() => {
                if (timer < 0) {
                    console.log("===== TOKEN_EXPIRED =====");
                    this.emit("OnTokenExpired", "Access Token Expired");
                }
            }, 60 * 10 * 1000);
        }

        /*
        * @desc: Update the count-down every 1 second
        * */
        let x = setInterval(() => {
            let now = new Date().getTime();
            const timeDifference = countDownDate - now;
            const timeDifferenceDialogue = countDown - now;

            if (timeDifferenceDialogue < 0) {
                console.log("===== TOKEN_IS_ABOUT_TO_EXPIRE_SOON ======");
                clearInterval(x);
                onTokenExpireAlert(timeDifference);
                onTokenExpired(timeDifferenceDialogue);
            }
        }, 1000);
    }

    inactivityTime = () => {

        //@Desc Called when site load time starts
        window.addEventListener('load', () => onResetTimer('load'), true);

        let events = ['mousewheel', 'mouseup', 'mousedown', 'keypress', 'scroll', 'touchmove'];
        events.forEach((name) => {
            document.addEventListener(name, () => onResetTimer(name), true);
        });

        let statusEvents = ['online', 'offline'];
        statusEvents.forEach((name) => {
            window.addEventListener(name, () => onResetTimer(name), true);
        });

        let pageEvents = ['pageshow', 'pagehide'];
        pageEvents.forEach((name) => {
            window.addEventListener(name, () => onResetTimer(name), true);
        });

        const onActivityCheck = () => {
            return this.emit("NoActivityCheck");
        }

        const onClearActivityInterval = (interval) => {
            clearTimeout(interval);
            interval = null;
            clearTimeout(timeInterval);
            timeInterval = null;
        }

        async function onResetTimer(event) {
            //console.log(event, '====== Event Detected ======');
            const token = await jwtService.getToken();
            const sessionToken = await jwtService.getTokenSession();
            if (token || sessionToken) {
                clearTimeout(timeInterval);
                timeInterval = null;
                //console.log(timeInterval, '===== Time Interval After Clear =====');
                timeInterval = setTimeout(() => {
                    return onActivityCheck();
                }, 60 * 60 * 1000);
                return
            }
            onClearActivityInterval(timeInterval);
        }
    };
}

const instance = new ActivityService();

export default instance;