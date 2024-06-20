import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3d0DdGOk_38kyB-akx3VZLDVEdDmR7-0",
  authDomain: "note-taking-app-41ac0.firebaseapp.com",
  projectId: "note-taking-app-41ac0",
  storageBucket: "note-taking-app-41ac0.appspot.com",
  messagingSenderId: "848809076717",
  appId: "1:848809076717:web:5d019372bd698514dea9e4",
  measurementId: "G-PCZDBX8XDT",
};

// Connect to your Firebase app
export const app = initializeApp(firebaseConfig);
