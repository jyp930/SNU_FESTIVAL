import { FIREBASE_CONFIG, GA_TRACKING_KEY } from '@/config';
import ReactGA from 'react-ga';
import firebase from 'firebase';
import 'firebase/firestore';

export function initializeGA() {
  if (GA_TRACKING_KEY) ReactGA.initialize(GA_TRACKING_KEY);
}

export function initializeFirebase() {
  if (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
