import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOHr4bfDu4nT0eJRKWtth6o4IBjIiqauY",
    authDomain: "users-5e6a5.firebaseapp.com",
    projectId: "users-5e6a5",
    storageBucket: "users-5e6a5.appspot.com",
    messagingSenderId: "730766062950",
    appId: "1:730766062950:web:56be96f8531150d68584a7"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);