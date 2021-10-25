import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
    const title = "Un título";
    const url = "https://localhost/algo/jpg";

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test("Debe mostrar el componente correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe tener un párrafo con el título", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("Debe tener la imagen igual al url y alt de los props", () => {
        const img = wrapper.find("img");
        //img.html()  mostraría el html tal cual     img.props()  muestra las propiedades que tiene
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("Debe de tener animate__fadeIn", () => {
        const div = wrapper.find("div");

        //opción 1
        //expect(div.hasClass("animate__fadeIn")).toBe(true);

        //opción 2
        const className = div.prop("className");
        expect(className.includes("animate__fadeIn")).toBe(true);
    });
});
