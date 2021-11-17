import { types } from "../components/auth/types";

export const setError = (err) => ({
    type: types.uiSetError,
    payload: err,
});

export const removeError = () => ({
    type: types.uiRemoveError,
});
