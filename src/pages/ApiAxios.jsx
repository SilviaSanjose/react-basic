import axios from "axios";
import { useState, useEffect } from "react";
import ApiRes from "../components/ApiRes";

const ApiAxios = () => {
  //axios usa método Http y la URL es un parámetro.
  //Es una librería de promesas que han de ser manipuladas con el then, que automáticamente obtiene la respuesta.

  const [user, getUser] = useState(""); //agregamos los datos recuperado al estado
  const urlBase = "https://jsonplaceholder.typicode.com/";

  //const apicall = "getOne";
  const apicall = "getAll";

  useEffect(() => {
    //indico que haga la llamada cuando renderice el componente
    if (apicall === "getAll") {
      getAll();
      console.log("useEfect");
    } else if (apicall === "getOne") {
      getOne();
    }
  }, []);

  const getOne = () => {
    axios
      .get(`${urlBase}posts`) //llamamos a la url
      .then((res) => {
        //obtenemos la respuesta
        const response = res.data[0]; //guardo los datos que necesito en response (en este caso solo un usuario)
        getUser(response); //añado el usuario al estado;
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getAll = () => {
    axios
      .get(`${urlBase}posts`) //llamamos a la url
      .then((res) => {
        //obtenemos la respuesta
        const response = res.data; //guardo los datos que necesito en response (en este caso solo un usuario)
        getUser(response); //añado el usuario al estado
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div>
      <h2>LLamada Api con Axios</h2>
      <pre>{`
      const [user, getUser] = useState(""); 
      const apicall = "getAll";   //  const apicall = "getOne";
    
      useEffect(() => {
        if (apicall === "getAll") {
          getAll();
        } else if (apicall === "getOne") {
          getOne();
        }
      }, []);
    
      const getOne = () => {
        axios
          .get(https://jsonplaceholder.typicode.com/posts ') 
          .then((res) => {
            const response = res.data[0]; 
            getUser(response); 
          })
          .catch((error) => console.error('Error'));
      };
    
      const getAll = () => {
        axios
          .get('https://jsonplaceholder.typicode.com/posts') 
          .then((res) => {
            const response = res.data; 
            getUser(response); 
          })
          .catch((error) => console.error('Error'));
      };
      `}</pre>
      <ApiRes data={user} apicall={apicall} />
    </div>
  );
};

export default ApiAxios;
