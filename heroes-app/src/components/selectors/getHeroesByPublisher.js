import { heroes } from "../../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublisher = ["DC Comics", "Marvel Comics"]; //los tipos de publisher que hay en el archivo heroes.js

    if (!validPublisher.includes(publisher)) {
        //si no se encuentra en el listado lanza excepción
        throw new Error(`Publisher "${publisher}" no existe`);
    }

    return heroes.filter((hero) => hero.publisher === publisher);
};
