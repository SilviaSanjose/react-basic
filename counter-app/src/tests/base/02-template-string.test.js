import { getSaludo } from "../../base/02-template-string";

describe("Pruebas archivo 02", () => {
    test("método getSaludo debe retornar hola silvia", () => {
        const nombre = "Silvia";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre);
    });

    //get saludo debe devolver Hola Goku si no hay argumento en el nombre.
    test("método getSaludo debe retornar Hola Goku si no hay argumentos en el nombre", () => {
        const saludo = getSaludo();

        expect(saludo).toBe("Hola Goku");
    });
});
