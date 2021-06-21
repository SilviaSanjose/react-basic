import axios from "axios";
import { useState } from "react";

export const get = () => {
  const urlBase = "https://jsonplaceholder.typicode.com/";

  axios
    .get(`${urlBase}posts`) //llamamos a la url
    .then((res) => {
      //obtenemos la respuesta
      const response = res.data[0]; //guardo los datos que necesito en response (en este caso solo un usuario)

      //console.log(response);
    })
    .catch((error) => console.error(`Error: ${error}`));
  r;
};
