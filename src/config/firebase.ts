// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBuRhnA8_spIzN8WkNqgcWk4itvd6dHYE4',
  authDomain: 'movie-auth-c0d1c.firebaseapp.com',
  projectId: 'movie-auth-c0d1c',
  storageBucket: 'movie-auth-c0d1c.appspot.com',
  messagingSenderId: '380992443972',
  appId: '1:380992443972:web:a141729b83b4d159abce11',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
