// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB5UUOFBPxuo2P9PEzhC-PyAhtEv68XW8",
  authDomain: "warehouse-management-react-app.firebaseapp.com",
  projectId: "warehouse-management-react-app",
  storageBucket: "warehouse-management-react-app.appspot.com",
  messagingSenderId: "318391743609",
  appId: "1:318391743609:web:fca88bb9dfff66bc8690a8",
  measurementId: "G-5B8WD3HY69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export default auth;