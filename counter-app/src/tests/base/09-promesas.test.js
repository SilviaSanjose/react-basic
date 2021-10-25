import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas test 09 promesas", () => {
    test("getHeroeByIdAsync devuelve un heroe por id de forma asíncrona", (done) => {
        //done avisa de que espere, si no pará la prueba sin esperar resultado de la llamada
        const id = 1;
        getHeroeByIdAsync(id).then((heroe) => {
            expect(heroe).toBe(heroes[0]); //es el héroe que tiene id 1
            done();
        });
    });

    test("getHeroeByIdAsync devuelve un heroe con id que no existe", (done) => {
        const id = 16;
        getHeroeByIdAsync(id).catch((error) => {
            //salta error en el expect  de las reglas de eslint, pero código funciona
            expect(error).toBe("No se pudo encontrar el héroe");
            done();
        });
    });
});
