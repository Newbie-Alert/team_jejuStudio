import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import config from "./config";

// firebaseConfig
const firebaseConfig = config.db.firebaseConfig;

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app