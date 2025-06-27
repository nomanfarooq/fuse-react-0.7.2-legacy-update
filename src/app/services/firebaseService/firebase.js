import firebase from "firebase/compat/app";
import config from "./firebaseServiceConfig";

firebase.initializeApp(config);

export default firebase;
