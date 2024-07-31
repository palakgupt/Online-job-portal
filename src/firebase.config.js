// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsVw6LQQDwjVViu2yTiE4VJUkzZ4w4RdU",
  authDomain: "online-job-portal-b2a02.firebaseapp.com",
  projectId: "online-job-portal-b2a02",
  storageBucket: "online-job-portal-b2a02.appspot.com",
  messagingSenderId: "32485150682",
  appId: "1:32485150682:web:4fec61916c3af74d803ae3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};