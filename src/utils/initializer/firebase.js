import { FIREBASE_CONFIG } from '@/config';
import 'firebase/firestore';
import firebase from 'firebase/app';

if (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const firestore = firebase.firestore();
