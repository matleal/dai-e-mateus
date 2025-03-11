"use server";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
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

export async function getData(collectionString: string) {
  try {
    const docRef = collection(db, collectionString);
    const collectionSnapshot = await getDocs(docRef);

    const collectionData = collectionSnapshot.docs.map((doc: any) => {
      return { id: doc.id, ...doc.data()! };
    });

    return collectionData;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

export async function updateDataById(
  collectionString: string,
  id: string,
  data: any
) {
  try {
    const docRef = doc(db, collectionString, id);
    return updateDoc(docRef, data);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function deleteData(collectionString: string, id: string) {
  try {
    const docRef = doc(db, collectionString, id);
    return await deleteDoc(docRef);
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
