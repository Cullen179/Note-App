import { db } from "@/firebase/db";
import { Note } from "@/types";
import { collection, getDocs } from "firebase/firestore";

export const fetchNotes = async (userID: string) => {
    const docRef = collection(db, "accounts", userID, "notes");
    const docSnap = await getDocs(docRef);
    return docSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }) as Note);
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    //   return docSnap.data();
    // } else {
    //     //   create a new document
    //     await setDoc(doc(db, "accounts", userID, "notes"), {
    //       notes: [] as Note[],
    //     });

    //     return {
    //         notes: [],
    //     };
    // }
}

