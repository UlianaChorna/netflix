// import firebase from "firebase"
import fb from "firebase/compat/app"
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyCbf_x45L31iPj6f5mCwKUXPZpipSlAtHs",
    authDomain: "netflix-test-uliana.firebaseapp.com",
    projectId: "netflix-test-uliana",
    storageBucket: "netflix-test-uliana.appspot.com",
    messagingSenderId: "358518853383",
    appId: "1:358518853383:web:462ee213f62bf6a3f4ffa2",
    measurementId: "G-9DK3G3XSLJ"
  }
fb.initializeApp(firebaseConfig);
//  firebase.initializeApp(firebaseConfig);

 const stor = fb.storage();

  export default stor;