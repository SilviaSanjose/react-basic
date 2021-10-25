import { getImagen } from "../../base/11-async-await";

describe("Pruebas con test 11 async y await", () => {
    test("Debe retornar la url de la imagen", async () => {
        const url = await getImagen();
        //console.log(url);
        expect(url.includes("https://")).toBe(true);
    });
});
