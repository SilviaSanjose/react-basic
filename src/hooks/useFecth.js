import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); //datos recibidos
  const [isPending, setIsPendin] = useState(true); //comporbar estado de la petición
  const [error, setError] = useState(null); //recoger posibles errores de la llamada

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }

        let data = await res.json();
        console.log("***", data);

        setIsPendin(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPendin(true);
        setError(error);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
