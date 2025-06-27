import FuseUtils from "@fuse/utils/FuseUtils";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
    ADD_FCM_TOKEN,
    CREATE_USER,
    GET_USER_CONFIG,
    LOGIN,
    UPDATE_USER_CONFIG,
    VERIFY,
    TWO_FACTOR_VERIFICATION,
    MICROSOFT_LOGIN
} from "../../utils/apiConfig";
import { onRequestFcmToken } from "../../utils/notifications";

/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {

    init() {
        //console.log('==== JWT SERIVCE ====');
        this.verifyUrl();
        this.setInterceptors();
        this.handleAuthentication();
    }

    setTimeZone = () => {
        const date = new Date();
        const offset = date.getTimezoneOffset();
        if (offset > 0) {
            const hour = offset / 60;
            return `-0${hour}:00`
        }
        const hour = Math.abs(offset) / 60;
        return `+0${hour}:00`
    }

    verifyUrl = () => {
        const queryString = window.location.pathname;
        const splitString = queryString?.split('/');
        const pathString = splitString[1];
        const access_token = splitString.reverse()[0];
        if (pathString === "verify") {
            localStorage.clear();
            this.signInWithRemoteToken(access_token).then((response) => {
                if (response?.token) {
                    return this.emit("onAutoLogin", true);
                }
                return this.emit("onAutoLogout", "Invalid Auth Token");
            });
        }
    }

    signInWithRemoteToken = (auth_token) => {
        const config = {
            headers: { 'Authorization': `Bearer ${auth_token}` }
        }
        return new Promise((resolve, reject) => {
            axios.get(VERIFY, config)
                .then((response) => {
                    if (response.data.data.ok === true && response.data.data.reply.token) {
                        const { token } = response.data.data.reply;
                        this.setSessionHeaders(token);
                        this.setDataToSessionStorage(response.data.data.reply);
                        resolve(response.data.data.reply);
                    } else {
                        this.logout();
                        reject(new Error("Failed to login with token."));
                    }
                })
                .catch((error) => {
                    this.logout();
                    reject(new Error("Failed to login with token."));
                });
        });
    };

    setInterceptors = () => {
        axios.interceptors.response.use((response) => {
            return response;
        }, (err) => {
            return new Promise((resolve, reject) => {
                //console.log(err.response?.status, '==== Request response status check JWT ====');
                if (err.response?.status === 401 || err.response?.status === 403 && err.config && !err.config.__isRetryRequest) {
                    // if you ever get an unauthorized response, logout the user
                    this.emit("onAutoLogout", "Invalid Auth Token");
                    this.setSession(null);
                }
                throw err;
            });
        });
    };

    handleAuthentication = () => {
        const access_token_session = this.getAccessTokenSession();
        const access_token = access_token_session ? access_token_session : this.getAccessToken();

        if (!access_token) {
            this.emit("onNoAccessToken");
            return;
        }

        if (this.isAuthTokenValid(access_token)) {
            if (access_token_session) {
                this.setSessionHeaders(access_token)
                this.emit("onAutoLogin", true);
                return;
            }
            this.setSession(access_token)
            this.emit("onAutoLogin", true);
        } else {
            this.setSession(null);
            this.emit("onAutoLogout", "access_token expired");
        }
    };

    createUser = (data) => {
        return new Promise((resolve, reject) => {
            axios.post(CREATE_USER, data).then((response) => {
                if (response.data.data.reply.token && response.data.data.ok === true) {
                    resolve(response);
                } else {
                    reject(response);
                    return response;
                }
            });
        });
    };

    createFcmToken = (auth_token) => {
        const config = { headers: { 'Authorization': `Bearer ${auth_token}` } }
        return new Promise(async (resolve, reject) => {
            await onRequestFcmToken().then(token => {
                if (token) {
                    axios.post(ADD_FCM_TOKEN, { fcm_token: token, application_type: "fleet-web" }, config)
                        .then((response) => {
                            if (response.data.data.ok === true) {
                                localStorage.setItem("fcm_token", token);
                                let resp = response.data.data.reply;
                                resolve(resp);
                                return
                            }
                            reject(new Error("Failed to add fcm token."));
                            return response;
                        });
                }
            });
        });
    }

    signInWithEmailAndPassword = ({ email, password, short_name }) => {
        return new Promise((resolve, reject) => {
            axios
                .post(LOGIN, {
                    email, password, short_name,
                })
                .then((response) => {
                    if (response.data.data.ok === true && response.data.data.reply.token && response.data.data.reply.twofa === true) {
                        return resolve(response.data.data.reply)
                    }
                    if (response.data.data.ok === true && response.data.data.reply.token) {
                        const { token } = response.data.data.reply;
                        this.setSession(token);
                        let resp = response.data.data.reply;
                        this.setDataToStorage(resp);
                        this.emit("onEmailLogin", true);
                        if (window.Notification && Notification.permission === 'granted') {
                            this.createFcmToken(token);
                        }
                        resolve(resp);

                        //resolve(response?.data?.data.reply);
                        //resolve(this.createStaticData(response?.data?.data.reply));
                    } else {
                        reject(response);
                        return response;
                    }
                });
        });
    };

    signInWithMSSO = (data) => {
        return new Promise((resolve, reject) => {
            const reqData = data?.short_name ? {
                token: data?.token,
                short_name: data?.short_name
            } : { token: data?.token };
            axios.post(MICROSOFT_LOGIN, reqData).then((response) => {
                if (response?.data?.data?.length > 0) {
                    let resp = response.data.data;
                    resolve(resp);
                    return
                }
                if (response.data.data.ok === true && response.data.data.reply.token && response.data.data.reply.twofa === true) {
                    return resolve(response.data.data.reply)
                }
                if (response.data.data.ok === true && response.data.data.reply.token) {
                    const { token } = response.data.data.reply;
                    this.setSession(token);
                    let resp = response.data.data.reply;
                    this.setDataToStorage(resp);
                    this.emit("onEmailLogin", true);
                    if (window.Notification && Notification.permission === 'granted') {
                        this.createFcmToken(token);
                    }
                    resolve(resp);
                }
                reject(response);
                return response;
            })
        });
    };

    signInWith2FACode = (data) => {
        return new Promise((resolve, reject) => {
            axios
                .post(TWO_FACTOR_VERIFICATION, { verifyCode: data.code }, {
                    headers: {
                        "Authorization": `Bearer ${data.token}`
                    }
                })
                .then((response) => {
                    if (response.data.data.ok === true && response.data.data.reply.verified === true && response.data.data.reply?.data?.token) {
                        const { token } = response.data.data.reply.data;
                        this.setSession(token);
                        let resp = response.data.data.reply.data;
                        this.setDataToStorage(resp);
                        this.emit("onEmailLogin", true);
                        if (window.Notification && Notification.permission === 'granted') {
                            this.createFcmToken(token);
                        }
                        resolve(resp);

                        //resolve(response?.data?.data.reply);
                        //resolve(this.createStaticData(response?.data?.data.reply));
                    } else {
                        reject(response);
                        return response;
                    }
                });
        });
    };


    signInWithToken = async () => {
        try {
            const tokenSession = await this.getTokenSession();
            const tokenLocal = await this.getToken();
            if (tokenSession) {
                this.setSessionHeaders(tokenSession);
                return this.getUserSessionData();
            }
            if (!tokenLocal) {
                new Error("Failed to login with token.");
                this.logout();
                return
            }
            this.setSession(tokenLocal);
            const settingId = this.getUserData().data.setting_id;
            this.getUserSettings(settingId, tokenLocal);
            window.Notification && Notification.permission === "granted" && this.createFcmToken(tokenLocal);
            return this.getUserData();
        } catch (err) {
            new Error(err)
            this.logout();
        }
    };

    setDataToStorage = (data) => {
        if (data.token) {
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("role", JSON.stringify(data.role));
            localStorage.setItem("type", JSON.stringify(data.account_type));
            return
        }
        localStorage.clear();
    }

    setDataToSessionStorage = (data) => {
        //console.log("==== set session storage =======");
        if (data.token) {
            sessionStorage.setItem("user", JSON.stringify(data));
            sessionStorage.setItem("role", JSON.stringify(data.role));
            sessionStorage.setItem("type", JSON.stringify(data.account_type));
            return
        }
        localStorage.clear();
    }

    setSession = (token) => {
        //console.log('==== Localstorage => set localstorage ====');
        if (token) {
            localStorage.setItem("jwt_access_token", token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            localStorage.clear();
            delete axios.defaults.headers.common.Authorization;
        }
    };

    setSessionHeaders = (token) => {
        //console.log('==== Session => set session headers ====');
        if (token) {
            sessionStorage.setItem("jwt_access_token", token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        } else {
            sessionStorage.clear();
            delete axios.defaults.headers.common.Authorization;
        }
    }

    logout = () => {
        //console.log('===== logout Session+Local ======');
        this.setSession(null);
        this.setSessionHeaders(null);
    };

    isAuthTokenValid = (access_token) => {
        if (!access_token) {
            return false;
        }
        const decoded = jwtDecode(access_token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            console.warn("access token expired");
            return false;
        }

        return true;
    };

    getAccessTokenSession = () => {
        return window.sessionStorage.getItem("jwt_access_token");
    };

    getTokenSession = async () => {
        return await window.sessionStorage.getItem("jwt_access_token");
    };

    getToken = async () => {
        return await window.localStorage.getItem("jwt_access_token");
    };

    getAccessToken = () => {
        return window.localStorage.getItem("jwt_access_token");
    };

    getUserSessionData = () => {
        const data = JSON.parse(window.sessionStorage.getItem("user"));
        const role = JSON.parse(window.sessionStorage.getItem("role"));
        const type = JSON.parse(window.sessionStorage.getItem("type"));
        //console.log('===== Session => getting data in session storage =====');
        return { data, role, type }
    }

    getUserData = () => {
        const data = JSON.parse(window.localStorage.getItem("user"));
        const role = JSON.parse(window.localStorage.getItem("role"));
        const type = JSON.parse(window.localStorage.getItem("type"));
        //console.log(data, role, type, 'GET_USER_DATA DATA, ROLE, TYPE');
        return { data, role, type }
    }

    onUserData = () => {
        const tokenSession = this.getAccessTokenSession();
        if (tokenSession) {
            return this.getUserSessionData()
        }
        return this.getUserData()
    }

    /*todo:This will be removed when data will came from api*/
    /*createStaticData = (userData) => {
        const role = JSON.parse(window.localStorage.getItem("role"));
        const roleData = roleSettingsConfig.find(item => item.role === role);
        const {apiData, settings, type} = roleData
        return {...userData, ...apiData, settings, type};
    }*/

    updateDataToSessionStorage = (data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
    }

    updateDataToLocalStorage = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
    }

    updateUserData = (userData, userId) => {
        //console.log(userData.data, 'UPDATED_USER_DATA');
        const tokenSession = this.getAccessTokenSession();
        const { settings } = userData.data;
        return axios.put(`${UPDATE_USER_CONFIG}${userId}`, { settings }).then((response) => {
            if (response.data.data.ok === true) {
                if (tokenSession) {
                    this.updateDataToSessionStorage(userData.data);
                    return
                }
                this.updateDataToLocalStorage(userData.data);
            }
        });
    };

    getUserSettings = (id, auth_token) => {
        const config = { headers: { 'Authorization': `Bearer ${auth_token}` } }
        const SETTINGS_URL = `${GET_USER_CONFIG}${id}`;
        if (id) {
            return new Promise((resolve, reject) => {
                axios.get(SETTINGS_URL, config).then((response) => {
                    if (response.data.data.ok === true && response.data.data.reply) {
                        const respUserData = response.data.data.reply;
                        const userData = this.getUserData();
                        const updatedUserData = this.onModifyUserData(userData, respUserData);
                        if (updatedUserData) {
                            this.setDataToStorage(updatedUserData.data);
                        }
                        resolve(response.data.data.reply);
                        return
                    }
                    reject(response);
                    return response;
                });
            });
        }
    }

    onModifyUserData = (oldUser, user) => {
        oldUser.data = {
            ...oldUser.data,
            modules: { ...oldUser.data.modules, ...user.modules },
            settings: { ...oldUser.data.settings, ...user.settings }
        }
        return oldUser
    }

    onTokenCheck = () => {
        const token = this.getAccessToken();
        const sessionToken = this.getAccessTokenSession();
        if (sessionToken) {
            return sessionToken
        }
        return token;
    }
}

const instance = new JwtService();

export default instance;
