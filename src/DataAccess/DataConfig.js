import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-R7pxTevqNMCIYQw24uvebGVqW0YfvOk",
  authDomain: "eccomercoder.firebaseapp.com",
  projectId: "eccomercoder",
  storageBucket: "eccomercoder.appspot.com",
  messagingSenderId: "796399833440",
  appId: "1:796399833440:web:c645ffa01c8dc67df5ce05"
};

// Initialize Firebase

export const initializeFirebase = ()=>{
  firebase.initializeApp(firebaseConfig);
}

export default function DataConfig(){

}

