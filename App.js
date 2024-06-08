
import { StyleSheet, Text,StatusBar  } from 'react-native';
import Navigation from './src/components/Navigation';
import HomeScreen from './src/screens/HomeScreen';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCNOMhTd9r-Ik9YRQQqIjm6J8hVwbz9Yc",
  authDomain: "myquizzykids.firebaseapp.com",
  projectId: "myquizzykids",
  storageBucket: "myquizzykids.appspot.com",
  messagingSenderId: "796292652961",
  appId: "1:796292652961:web:9e350b136f90360c2135e0",
  measurementId: "G-H8CLZ66L03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth with persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default function App() {

  return (<>
   <StatusBar backgroundColor="#8e44ad" barStyle="light-content" />
<Navigation/>

 {/* <Text>hello</Text> */}
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
