// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOUvSo6b3H_X6mvQJXNZYD_JtcBIwCEeY",
  authDomain: "mateus-e-dai.firebaseapp.com",
  projectId: "mateus-e-dai",
  storageBucket: "mateus-e-dai.appspot.com",
  messagingSenderId: "380691643344",
  appId: "1:380691643344:web:7a643cff967d313b6417d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default async function saveData(collectionString: string, data: any) {
  try {
    const newDocRef = collection(db, collectionString);
    await addDoc(newDocRef, data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
