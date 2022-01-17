// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//Import services
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRm64UggmCe3vpsc2Vbd66FWPsBhm6kY",
  authDomain: "phantom-coin.firebaseapp.com",
  projectId: "phantom-coin",
  storageBucket: "phantom-coin.appspot.com",
  messagingSenderId: "271223207702",
  appId: "1:271223207702:web:059492480949bbfa610237",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { provider, auth };
