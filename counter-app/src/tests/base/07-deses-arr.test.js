import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas con test 07", () => {
    test("Debe devolver array de string y number", () => {
        const arr = retornaArreglo();
        expect(arr).toEqual(["ABC", 123]);
    });

    test("Deestruturación: Debe devolver array de string y number", () => {
        const [letras, numeros] = retornaArreglo();
        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string");

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe("number");
    });
});
