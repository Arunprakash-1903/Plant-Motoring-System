
import { initializeApp} from "firebase/app";
import {getDatabase,ref,set,onValue } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyD8f1MPSbn_1yTlXgP1HIlHDiTmXYCLBxA",
  authDomain: "plant-monitoring-system-d2e44.firebaseapp.com",
  databaseURL: "https://plant-monitoring-system-d2e44-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "plant-monitoring-system-d2e44",
  storageBucket: "plant-monitoring-system-d2e44.appspot.com",
  messagingSenderId: "359709290364",
  appId: "1:359709290364:web:40f1bfa28ffccb267a3ef9",
  measurementId: "G-3HRZK1QBQ5"
};


const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
export  {onValue,ref,set }
