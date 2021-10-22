//componente a mostrar en el HTML
import { useState, useEffect, Fragment } from "react";

const ApiRes = ({ data }) => {
  // console.log("inicio");
  //console.log("mis dtos", data);

  const [dataP, setDataP] = useState("");

  useEffect(() => {
    setDataP(data);
    //console.log("Mis datos3", dataP);
  }, [data]);

  if (dataP) {
    if (Array.isArray(dataP)) {
      return (
        <div>
          Listado:
          <div className="api-box-one">
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
        </div>
      );
    } else {
      return (
        <div>
          Listado de uno:
          <div className="api-box-one">
            <ul>
              Mis datos:
              <li>Usuario: {dataP.userId}</li>
              <li>Título: {dataP.title}</li>
              <li>{dataP.body}</li>
            </ul>
          </div>
        </div>
      );
    }
  } else {
    return <div className="api-box-one">No hay datos para mostrar</div>;
  }

  // const data = props;
  // // const [data, setUsers] = useState("");
  // // useEffect(() => {
  // //   setUsers(props.data);
  // //   console.log("Mis datos3", props.data);
  // // }, [props.data]);

  // if (data === "") {
  //   console.log("Entrandoooo");
  //   return null;
  // }
  // console.log("fin Entrandoooo");
  // //if (data.length > 0) {
  // console.log("Datos", data);

  // return (
  //   <div>
  //     <ul>
  //       {data.map((i, index) => (
  //         <Fragment key={index}>
  //           <li>{i.id}</li>
  //           <li>{i.title}</li>
  //           <li>{i.body}</li>
  //         </Fragment>
  //       ))}
  //     </ul>
  //   </div>
  // );
  // } else if (!data.length) {
  //   return (
  //     <div>
  //       <ul>
  //         Mis datos:
  //         <li>Usuario: {props.data.userId}</li>
  //         <li>Título: {props.data.title}</li>
  //         <li>{props.data.body}</li>
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   console.log("Else: Sin datos");
  //   console.log(data);
  //   console.log("fin");
  //   return <h1>No hay datos</h1>;
  // }
};

export default ApiRes;
