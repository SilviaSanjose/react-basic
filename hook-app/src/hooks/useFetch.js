import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
    const isMounted = useRef(true);

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        //no debe hacer nada, sólo cambiar a false el useRef cuando se renderice el componente
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        setstate({ data: null, loading: true, error: null }); //para establecer valores iniciales y cargue el loading al pasar de una cita a otra
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (isMounted.current) {
                    //si está en true se fijan los datos.
                    setstate({
                        data,
                        loading: false,
                        error: null,
                    });
                }
            });
    }, [url]);

    return state;
};

export default useFetch;
