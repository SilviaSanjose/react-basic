import { saludar3, getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Probando test 05", () => {
    test("Debe devolver Hola Test 05", () => {
        const me = "Test 05";

        const saludar = saludar3(me);

        expect(saludar).toBe("Hola, " + me);
    });

    test("getUser debe devolver un objeto", () => {
        const userText = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();

        expect(user).toEqual(userText); //toEqual comprueba que los objetos tenga mismos valores y propiedades.
    });

    test("getUsuarioActivo debe devolver un objeto concreto", () => {
        const nombre = "Silvia";

        const userA = getUsuarioActivo(nombre);

        expect(userA).toEqual({
            uid: "ABC567",
            username: "Silvia",
        });
    });
});
