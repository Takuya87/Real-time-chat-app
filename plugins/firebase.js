import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyBuXiUOK0tHZvnSKHxm0XIdq8TDtkRFCvg",
        authDomain: "slack-demo-app-f3474.firebaseapp.com",
        projectId: "slack-demo-app-f3474",
        storageBucket: "slack-demo-app-f3474.appspot.com",
        messagingSenderId: "689508929770",
        appId: "1:689508929770:web:ac6e246887a6d9e5418793",
        measurementId: "G-48GSWHFEBB"
    }
    firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
    firebase,
    db
}