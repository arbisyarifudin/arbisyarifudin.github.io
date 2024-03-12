import { defineNuxtPlugin } from '#app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAb89WT0u_qrodvGTxWyVAsuZhuvFKXaWg",
    authDomain: "arsyaf-web.firebaseapp.com",
    databaseURL: "https://arsyaf-web-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "arsyaf-web",
    storageBucket: "arsyaf-web.appspot.com",
    messagingSenderId: "622646676804",
    appId: "1:622646676804:web:6e755427a9dcec7a18db11",
    measurementId: "G-H0M2MEC1PP"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// if (process.env.NODE_ENV === 'production') {
//    const analytics = getAnalytics(app);
// if (analytics.isSupported()) {
//     console.log('firebase analytics initialized');    }
// }

// export default app;

// Initialize Firebase within a Nuxt plugin by using defineNuxtPlugin
export default defineNuxtPlugin(nuxtApp => {
    const app = initializeApp(firebaseConfig);
    
    // Here you might want to export or do something with the Firebase app
    // For example, adding the Firebase app to the nuxtApp so it can be accessed globally
    nuxtApp.provide('firebaseApp', app);

    if (process.env.NODE_ENV === 'production') {
        const analytics = getAnalytics(app);
        if (analytics) {
            console.log('firebase analytics initialized');
        }
    } else {
        console.log('firebase initialized');
    }
});