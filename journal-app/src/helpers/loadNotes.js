import { db } from "../firebase/firebase-config";
import { collection, getDocs, query } from "firebase/firestore";

export const loadNotes = async (uid) => {
    //const notesSnap = await getDoc(doc(db, `${uid}/journal`));
    const notesSnap = await getDocs(
        query(collection(db, `${uid}/journal/notes`))
    );
    const notes = [];
    notesSnap.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data(),
        });
    });
    return notes;
};
