import firebase from "../services/firebaseService/firebase";
import {base64VapidKeyFireBase} from "../services/firebaseService/firebaseServiceConfig";
import logger from "./config/loggerConfig";

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
}

export const onRequestFcmToken = async () => {
    const fcmToken = localStorage.getItem("fcm_token");
    if (!fcmToken) {
        try {
            return await firebase.messaging().getToken();
        } catch (e) {
            logger.debug(e, 'Error creating fcm token');
        }
        return
    }
    return fcmToken
}

export const onRequestNotification = () => {
    navigator.serviceWorker.ready.then((serviceWorkerRegistration) => {
        const applicationServerKey = urlBase64ToUint8Array(base64VapidKeyFireBase);
        serviceWorkerRegistration.pushManager.subscribe({
            userVisibleOnly: true, applicationServerKey: applicationServerKey,
        })
    });
}

/*
export const onDisplayNotification = async (notificationTitle) => {
    navigator.serviceWorker.getRegistration().then((reg) => {
        const options = {
            body: "Thanks for allowing push notification !",
            icon: "/assets/images/logos/eagle-iot-logo-full.png",
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(), primaryKey: 0,
            },
        };
        reg.showNotification(notificationTitle ?? 'Notifications Allowed', options);
    });
};
*/

/*export const onDisplayAllowPopup = async (notificationTitle) => {
    const options = {
        body: "You need to enable notifications permissions!!!",
        icon: "/assets/images/logos/eagle-iot-logo-full.png",
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(), primaryKey: 0,
        },
    };
    navigator.serviceWorker.ready.then(function (serviceWorker) {
        serviceWorker.showNotification(notificationTitle ?? 'Notifications Blocked', options);
    });
};*/
