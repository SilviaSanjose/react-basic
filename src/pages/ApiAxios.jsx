//import axios from "axios";
//import { useState, useEffect } from "react";
import ApiRes from "../components/ApiRes";
import { useFetch } from "../hooks/useFecth";

const ApiAxios = () => {
  //axios usa método Http y la URL es un parámetro.
  //Es una librería de promesas que han de ser manipuladas con el then, que automáticamente obtiene la respuesta.

  const urlBase = "https://jsonplaceholder.typicode.com/";

  //const url = `${urlBase}posts/1`;
  const url = `${urlBase}posts`;

  const { data, isPending, error } = useFetch(url);

  console.log("Recibido en data", data);

  //const [user, getUser] = useState(""); //agregamos los datos recuperado al estado
  // useEffect(() => {
  //   //indico que haga la llamada cuando renderice el componente
  //   axios
  //     .get(url) //llamamos a la url
  //     .then((res) => {
  //       //obtenemos la respuesta
  //       const response = res.data; //guardo los datos que necesito en response (en este caso solo un usuario)
  //       console.log("Reespuesta", response);
  //       getUser(response); //añado el usuario al estado;
  //     })
  //     .catch((error) => console.error(`Error: ${error}`));
  // }, [url]);

  return (
    <div>
      <h2>LLamada Api con Axios</h2>
      {JSON.stringify(isPending)}
      {JSON.stringify(error)}

      <ApiRes data={data} />
    </div>
  );
};

export default ApiAxios;
