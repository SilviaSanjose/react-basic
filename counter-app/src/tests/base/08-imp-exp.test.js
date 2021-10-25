import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas test 08", () => {
    test("Obtener heroe por id, devuelve array", () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find((h) => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test("Devuelve undefined si el id del Heroe no existe", () => {
        const id = 17;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test("Devuelve los heroes de DC", () => {
        const owner = "DC";
        const heroesDC = getHeroesByOwner(owner);

        const heroesData = heroes.filter((o) => o.owner === owner);

        expect(heroesDC).toEqual(heroesData);
    });

    test("Devuelve los heroes de Marvel", () => {
        const owner = "Marvel";
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    });
});
