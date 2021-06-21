//componente a mostrar en el HTML
import { useState, useEffect, Fragment } from "react";

const ApiRes = (props) => {
  //console.log("Mis datos", props);
  //console.log("Mis datos2", props.data);

  const [data, setUsers] = useState(["Loading"]);

  useEffect(() => {
    setUsers(props.data);
    console.log("Mis datos3", data);
  });

  if (data.length > 0) {
    console.log("Datod", data);
    if (data[0] === "Loading") {
      console.log("Data 0");
      return <h1>Loading</h1>;
    } else {
      console.log("IF");
      if (props.apicall === "getAll") {
        return (
          <div>
            ENtra en div
            <ul>
              {data.map((i, index) => (
                <Fragment key={index}>
                  <li>{i.userId}</li>
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
    }
  } else {
    console.log("Else");
    return <h1>No hay datos</h1>;
  }
};

export default ApiRes;
