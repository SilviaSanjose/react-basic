import { db } from "../firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";

//getState obtiene todo el estado del reducer
//crear nueva nota
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

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

//obtener nota activa
export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note,
    },
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid); //llamo a cargar las notas del usuario
        dispatch(setNotes(notes)); //guardo las notas en el store
    };
};

//guardar nota en el store
export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes,
});
