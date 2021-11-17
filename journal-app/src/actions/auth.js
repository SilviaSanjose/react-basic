import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "@firebase/auth";
import { updateProfile } from "firebase/auth";
import { types } from "../components/auth/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

//al hacer login se llama a esta función con un disparador, que también dispara la función de login a los 3.5 segundos
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch((error) => {
                console.error("Error de acceso");
                dispatch(finishLoading());
            });
    };
};

export const startRegistrerWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await updateProfile(auth.currentUser, { displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
            dispatch(login(user.uid, user.displayName));
        });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    },
});
