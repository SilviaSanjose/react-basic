import { getGif } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
    test("Debe de traer 10 elementos", async () => {
        const gifs = await getGif("One Punch");

        expect(gifs.length).toBe(10);
    });

    test("Debe ser un array vacio si no hay categoria", async () => {
        const gifs = await getGif("");

        expect(gifs.length).toBe(0);
    });
});
