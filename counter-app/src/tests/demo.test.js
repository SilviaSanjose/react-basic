//los archivos de test tienen que llamarse nombre.test.js  para que reconozca que son test

describe("Pruebas archivo demo", () => {
    test("deben ser iguales los string", () => {
        //inicialización
        const mensaje = "Hola mundo";

        //estímulo
        const mensaje2 = `Hola mundo`;

        //observar_ expect es lo que debe esperar la prueba
        expect(mensaje).toBe(mensaje2); //toBe compara si son iguales
    });
});

//en la consola en las opciones (w), por ejemplo p puede filtrar por un archivo de test
