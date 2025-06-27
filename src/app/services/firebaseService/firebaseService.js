/* eslint import/no-extraneous-dependencies: off */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/messaging';
import config from './firebaseServiceConfig';

class FirebaseService {
	init ( success ) {
		if ( Object.entries(config).length === 0 && config.constructor === Object ) {
			if ( import.meta.env.MODE === 'development' ) {
				console.warn(
					'Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js'
				);
			}
			success(false);
			return;
		}
		
		if ( firebase.apps.length ) {
			return;
		}
		firebase.initializeApp(config);
		this.db = firebase.database();
		this.auth = firebase.auth();
		//this.messaging = firebase.messaging();
		success(true);
	}
	
	getDeviceToken = () => {
		const fireBaseMessaging = firebase.messaging();
		return Notification.requestPermission().then(( permission ) => {
			// console.log('Notification permission', permission);
			if ( permission === 'granted' ) {
				return fireBaseMessaging.getToken(fireBaseMessaging, {vapidKey: process.env.FIREBASE_KEY_PAIR}).then(token => token).catch(( err ) => {
					console.log(err, 'err in getting device token');
				});
			} else {
				console.log('Permission not granted');
			}
		});
	};
	
	/*onMessageListener = () => {
		const messaging = firebase.messaging();
		new Promise(( resolve ) => {
			messaging.onMessage(( payload ) => {
				resolve(payload);
			});
		});
	};*/
	
	getUserData = ( userId ) => {
		if ( !firebase.apps.length ) {
			return false;
		}
		return new Promise(( resolve, reject ) => {
			this.db
				.ref(`users/${userId}`)
				.once('value')
				.then(( snapshot ) => {
					const user = snapshot.val();
					resolve(user);
				});
		});
	};
	
	updateUserData = ( user ) => {
		if ( !firebase.apps.length ) {
			return false;
		}
		return this.db.ref(`users/${user.uid}`).set(user);
	};
	
	onAuthStateChanged = ( callback ) => {
		if ( !this.auth ) {
			return;
		}
		this.auth.onAuthStateChanged(callback);
	};
	
	signOut = () => {
		if ( !this.auth ) {
			return;
		}
		this.auth.signOut();
	};
}

const instance = new FirebaseService();

export default instance;
