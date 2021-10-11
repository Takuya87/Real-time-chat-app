import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {
        apiKey: "××××××××××××××××××××××××××",
        authDomain: "××××××××××××××××××××××××××",
        projectId: "××××××××××××××××××××××××××",
        storageBucket: "××××××××××××××××××××××××××",
        messagingSenderId: "××××××××××××××××××××××××××",
        appId: "××××××××××××××××××××××××××",
        measurementId: "××××××××××××××××××××××××××"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
    firebase,
    db
}
