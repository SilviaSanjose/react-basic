import { types } from "./types";
//Reducer de Autentificación
/*
En caso de no estar logueado es un objeto vacío {} para que no devuelve un undefinded, el state por defecto, y si se loguea sera un obajeto con id y nombre:
{uid: 'sfdfdfdfdf',
name: 'Silvia'}
*/

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            };
        case types.logout:
            return {};

        default:
            return state;
    }
};
