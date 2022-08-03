import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: "AIzaSyBsUHUNLkpCWYDe3uw4zZJD9Q79KVClQWA",
    authDomain: "mini-project-dts-2b87f.firebaseapp.com",
    projectId: "mini-project-dts-2b87f",
    storageBucket: "mini-project-dts-2b87f.appspot.com",
    messagingSenderId: "116700643895",
    appId: "1:116700643895:web:07482217804112ff28f5b2"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };