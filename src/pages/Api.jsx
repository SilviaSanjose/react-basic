//import axios from "axios";
//import { useState, useEffect } from "react";
import ApiRes from "../components/ApiRes";
import CrudApi from "../components/CrudApi";
import { useFetch } from "../hooks/useFecth";

const Api = () => {
  //axios usa método Http y la URL es un parámetro.
  //Es una librería de promesas que han de ser manipuladas con el then, que automáticamente obtiene la respuesta.

  const urlBase = "https://jsonplaceholder.typicode.com/";

  //const url = `${urlBase}posts/1`;
  const url = `${urlBase}posts`;

  const { data, isPending, error } = useFetch(url);

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
    <>
      <div>
        Desde está página, vamos a llamar a dos componentes: CrudApi y ApiRes:
      </div>
      <div>
        Para ApiRes, vamos a usar un hook personalizado para hacer la petición
        fetch, el cual hace la llamada a la api, y devuelve los datos que se
        pasan al componente, más variables si ha habido un error y si esá
        pendiente la llamada. Esta separado por el componente formulario, la
        tabla y la fila de cada tabla
      </div>
      <br />
      <h2>Crud Api</h2>
      <CrudApi></CrudApi>
      <br />
      <br />
      <h2>LLamada Api</h2>
      {JSON.stringify(error) ? "error true" : "error false"}
      <br />
      "pending"; {JSON.stringify(isPending)}
      <br />
      "error"; {JSON.stringify(error)}
      <ApiRes data={data} />
    </>
  );
};

export default Api;
