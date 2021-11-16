import { getAuth, signInWithPopup } from "@firebase/auth";
import { types } from "../components/auth/types";
import { googleAuthProvider } from "../firebase/firebase-config";

//al hacer login se llama a esta función con un disparador, que también dispara la función de login a los 3.5 segundos
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, "Ampo"));
        }, 3500);
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