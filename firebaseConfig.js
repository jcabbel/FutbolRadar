//firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { EXPO_PUBLIC_FIREBASE_API_KEY, EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN, EXPO_PUBLIC_FIREBASE_PROJECT_ID, EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET, EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, EXPO_PUBLIC_FIREBASE_APP_ID, EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID } from '@env';

const firebaseConfig = {
  apiKey: EXPO_PUBLIC_FIREBASE_API_KEY || 'test',
  authDomain: EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN || 'test',
  projectId: EXPO_PUBLIC_FIREBASE_PROJECT_ID || 'test',
  storageBucket: EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET || 'test',
  messagingSenderId: EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'test',
  appId: EXPO_PUBLIC_FIREBASE_APP_ID || 'test',
  measurementId: EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID || 'test',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };
