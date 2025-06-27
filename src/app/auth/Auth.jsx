import FuseSplashScreen from "@fuse/core/FuseSplashScreen";
//import auth0Service from "app/services/auth0Service";
import firebaseService from "app/services/firebaseService";
import jwtService from "app/services/jwtService";
import {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {hideMessage, showMessage} from "app/store/fuse/messageSlice";

import {logoutUser, setUserData, setUserDataFirebase, setUserDataAuth0} from "./store/userSlice";
import subscriptionService from "app/services/subscriptionService";
import activityService from "app/services/activityService";
import socketService from "app/services/socketService";
import {
    closeActivityDialogue, openActivityDialogue,
} from "../fuse-layouts/shared-components/activityDialogue/store/stateSlice";
import {
    openSessionTimerAlert, setSessionTimer,
} from "../fuse-layouts/shared-components/sessionTimerAlert/store/stateSlice";
import {microsoftAuthService} from "../services/microsoftService/microsoftService";
import {onSocketJwtToken} from "../services/socketService/socketService";
import {socketError, socketSuccess} from "./store/socketSlice";
import {setUserAlert} from "../fuse-layouts/shared-components/userAlerts/store/userAlertsSlice";

class Auth extends Component {
    state = {
        waitAuthCheck: true,
    };

    componentDidMount() {
        return Promise.all([// Comment the lines which you do not use
            // this.firebaseCheck(),
            // this.auth0Check(),
            this.jwtCheck(),
            this.microsoftCheck(),
            this.activityCheck(),
            this.socketCheck(),
            this.subscriptionCheck(),
        ]).then(() => {
            this.setState({waitAuthCheck: false});
        });
    }

    subscriptionCheck = () => {
        new Promise((resolve) => {
            subscriptionService.on("OnSubscriptionExpireAlert", (timeLaps) => {
                //console.log("========= OnSubscriptionExpireAlert =========", timeLaps);
                /* this.props.showMessage({
                     message: "Your subscription is about to expire soon!!!",
                 });*/
                this.props.setUserAlert({
                    type: "alert",
                    title: "Subscription Renewal",
                    message: "Your subscription is about to expire soon!!!",
                    priority: "medium",
                    countdown: timeLaps,
                    enable: true,
                },);
                resolve();
            });

            subscriptionService.on("OnSubscriptionExpired", () => {
                console.log("========= OnSubscriptionExpired =========");
                this.props.showMessage({
                    message: "Your subscription has been expired!!!",
                });
                this.props.setUserAlert({
                    type: "alert",
                    title: "Renew your Subscription",
                    message: "Your subscription is about to expire soon!!!",
                    priority: "medium",
                    countdown: null,
                    enable: false,
                },);
                resolve();
            });

            subscriptionService.on("onAutoLogout", () => {
                this.props.logout();
                resolve();
            });
        });
        subscriptionService.init();
        return Promise.resolve();
    };

    activityCheck = () => {
        new Promise((resolve) => {
            activityService.on("NoActivityCheck", () => {
                console.log("========= NoActivityCheck =========");
                this.props.showMessage({message: "No user activity"});
                this.props.openActivityDialogue();
                resolve();
            });

            activityService.on("OnTokenExpireAlert", (timeDiff) => {
                console.log("========= OnTokenExpireAlert =========", timeDiff);
                this.props.showMessage({
                    message: "Your session is about to expire soon!!!",
                });
                this.props.closeActivityDialogue();
                this.props.openSessionTimerAlert();
                resolve();
            });

            activityService.on("OnTokenExpired", (message) => {
                console.log("========= OnTokenExpired =========", message);
                if (message) {
                    this.props.showMessage({message});
                }
                //this.props.logout();
                resolve();
            });

            activityService.on("onAutoLogout", (message) => {
                if (message) {
                    this.props.showMessage({message});
                }
                this.props.logout();
                resolve();
            });
        });

        activityService.init();

        return Promise.resolve();
    };

    jwtCheck = () => new Promise((resolve) => {
        jwtService.on("onAutoLogin", () => {
            //this.props.showMessage({ message: "Logging in with JWT" });

            /**
             * Sign in and retrieve user data from Api
             */
            jwtService
                .signInWithToken()
                .then((user) => {
                    this.props.setUserData(user);
                    onSocketJwtToken(user?.data?.token)
                    resolve();
                    // this.props.showMessage({ message: "Logged in with JWT" });
                })
                .catch((error) => {
                    this.props.showMessage({message: error.message});
                    resolve();
                });
        });

        jwtService.on("onAutoLogout", (message) => {
            if (message) {
                this.props.showMessage({message});
            }

            this.props.logout();

            resolve();
        });

        jwtService.on("onNoAccessToken", () => {
            resolve();
        });

        jwtService.init();

        return Promise.resolve();
    });

    socketCheck = () => {
        new Promise((resolve) => {
            socketService.on("onSocketConnect", (message) => {
                /*this.props.showMessage({
                    message: message,
                    autoHideDuration: 3000,
                    anchorOrigin: {vertical: 'top', horizontal: 'right',},
                    variant: 'success',
                })*/
                this.props.socketSuccess();
                resolve();
            });

            socketService.on("onSocketPingPong", (message) => {
                message.alive ? this.props.socketSuccess() : this.props.socketError("NoLiveConnection");
                resolve();
            });

            socketService.on("onSocketError", (message) => {
                this.props.showMessage({
                    message: message,
                    autoHideDuration: 3000,
                    anchorOrigin: {vertical: 'top', horizontal: 'right',},
                    variant: 'error',
                })
                this.props.socketError(message);
                resolve();
            });

            socketService.on("onSocketEmitError", (message) => {
                /*this.props.showMessage({
                    message: message,
                    autoHideDuration: 3000,
                    anchorOrigin: {vertical: 'top', horizontal: 'right',},
                    variant: 'error',
                })*/
                this.props.socketError(message);
                resolve();
            });

            socketService.on("onSocketListenError", (message) => {
                /*this.props.showMessage({
                    message: message,
                    autoHideDuration: 3000,
                    anchorOrigin: {vertical: 'top', horizontal: 'right',},
                    variant: 'error',
                })*/
                resolve();
            });

            socketService.on("onSocketDisconnect", (message) => {
                this.props.showMessage({
                    message: message,
                    autoHideDuration: 3000,
                    anchorOrigin: {vertical: 'top', horizontal: 'right',},
                    variant: 'warning',
                });
                this.props.socketError(message);
                resolve();
            });
        });
        setTimeout(() => {
            socketService.initializeSocket();
        }, 1000)
        return Promise.resolve();
    };

    microsoftCheck = () => {
        return new Promise((resolve) => {
            microsoftAuthService.init((success) => {
                if (!success) {
                    resolve(null);
                    return
                }
                const msalApp = microsoftAuthService.getMsalApp();
                msalApp.initialize();
                resolve(msalApp);
            });
        });
    };

   /* auth0Check = () => new Promise((resolve) => {
        auth0Service.init((success) => {
            if (!success) {
                resolve();
            }
        });

        if (auth0Service.isAuthenticated()) {
            this.props.showMessage({message: "Logging in with Auth0"});

            /!**
             * Retrieve user data from Auth0
             *!/
            auth0Service.getUserData().then((tokenData) => {
                this.props.setUserDataAuth0(tokenData);

                resolve();

                this.props.showMessage({message: "Logged in with Auth0"});
            });
        } else {
            resolve();
        }

        return Promise.resolve();
    });*/
    firebaseCheck = () => new Promise((resolve) => {
        firebaseService.init((success) => {
            if (!success) {
                resolve();
            }
        });

        firebaseService.onAuthStateChanged((authUser) => {
            if (authUser) {
                this.props.showMessage({message: "Logging in with Firebase"});

                /**
                 * Retrieve user data from Firebase
                 */
                firebaseService.getUserData(authUser.uid).then((user) => {
                    this.props.setUserDataFirebase(user, authUser);

                    resolve();

                    this.props.showMessage({message: "Logged in with Firebase"});
                }, (error) => {
                    resolve();
                });
            } else {
                resolve();
            }
        });

        return Promise.resolve();
    });

    render() {
        return this.state.waitAuthCheck ? (<FuseSplashScreen/>) : (<>{this.props.children}</>);
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logoutUser,
        setUserData,
        //setUserDataAuth0,
        setUserDataFirebase,
        setSessionTimer,
        showMessage,
        hideMessage,
        socketSuccess,
        socketError,
        openActivityDialogue,
        closeActivityDialogue,
        openSessionTimerAlert,
        setUserAlert,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Auth);
