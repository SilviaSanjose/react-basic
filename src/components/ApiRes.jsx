//componente a mostrar en el HTML
import { useState, useEffect, Fragment } from "react";

const ApiRes = (props) => {
  console.log("inicio");
  console.log("Mis datos", props);

  const [data, setUsers] = useState("");
  useEffect(() => {
    setUsers(props.data);
    console.log("Mis datos3", props.data);
  }, [props.data]);

  if (data === "") {
    console.log("Entrandoooo");
    return null;
  }
  console.log("fin Entrandoooo");
  if (data.length > 0 || typeof data === "object") {
    console.log("Datos", data);

    if (props.apicall === "getAll") {
      console.log("fin");
      return (
        <div>
          <ul>
            {data.map((i, index) => (
              <Fragment key={index}>
                <li>{i.id}</li>
                <li>{i.title}</li>
                <li>{i.body}</li>
              </Fragment>
            ))}
          </ul>
        </div>
      );
    } else if (props.apicall === "getOne") {
      return (
        <div>
          <ul>
            Mis datos:
            <li>Usuario: {props.data.userId}</li>
            <li>Título: {props.data.title}</li>
            <li>{props.data.body}</li>
          </ul>
        </div>
      );
    }
  } else {
    console.log("Else: Sin datos");
    console.log(data);
    console.log("fin");
    return <h1>No hay datos</h1>;
  }
};

export default ApiRes;
