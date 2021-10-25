import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en primera app", () => {
    test("Debe mostrar el mensaje Hola desde index", () => {
        const saludo = "Hola desde index";

        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        //getByText es un método propio de test con el render.
        expect(getByText(saludo)).toBeInTheDocument();
    });
});
