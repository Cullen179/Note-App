import { getFirestore } from "firebase/firestore";
import { app } from "./config";

// Connect to your Firestore database
export const db = getFirestore(app);

