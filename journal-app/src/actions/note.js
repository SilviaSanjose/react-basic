import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";

//getState obtiene todo el estado del reducer
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log(uid);

        const newNote = {
            title: "",
            body: "",
            date: new Date().getTime(),
        };

        //añado a firebase, colecciíon con el uid del id del usuario/documento journal/ colección notes >> añado los datos de la nota nueva
        const doc = await addDoc(
            collection(db, `${uid}/journal/notes`),
            newNote
        );
        dispatch(activeNote(doc.id, newNote));
    };
};

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});
