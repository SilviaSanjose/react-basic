import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGifs";

//se encarga de renderizar cuando cambia categorias y llamar a función que gestiona las llamadas Api
export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    //llama al helper
    useEffect(() => {
        getGif(category).then((imgs) => {
            //recibo las imagenes del helper- llamada Api
            setState({
                data: imgs,
                loading: false,
            });
        });
    }, [category]);

    return state; //{data: [], loading: true
};
