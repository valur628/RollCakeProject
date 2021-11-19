// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCULhjNY-Jc7H3FucLkXZqN3kR7b3izdFg",
  authDomain: "rollcakeserver.firebaseapp.com",
  projectId: "rollcakeserver",
  storageBucket: "rollcakeserver.appspot.com",
  messagingSenderId: "1091059315554",
  appId: "1:1091059315554:web:3cf9d1f0e74c96371af23b",
  measurementId: "G-J881LLT18D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export default getFirestore(app);
