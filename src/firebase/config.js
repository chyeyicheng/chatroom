import { initializeApp } from "firebase/app";
import { serverTimestamp, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAN4chgmJkJdiPbbkSlmZ1J9G_TrivuBs",
  authDomain: "chatroom-b0fbb.firebaseapp.com",
  projectId: "chatroom-b0fbb",
  storageBucket: "chatroom-b0fbb.appspot.com",
  messagingSenderId: "263395972819",
  appId: "1:263395972819:web:683c9c04fe8be6aa2fe626"
};

const app = initializeApp(firebaseConfig);

// const auth = (app);
const db = getFirestore(app);
const timestamp = serverTimestamp();
export {  db, timestamp };