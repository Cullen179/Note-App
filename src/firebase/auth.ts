import { getAuth } from "firebase/auth";
import { app } from "./config";

// Connect to Firebase auth
export const auth = getAuth(app);
