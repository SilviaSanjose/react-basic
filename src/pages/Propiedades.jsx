import React from "react";

const Propiedades = (props) => {
  return (
    <main>
      <h2>Propiedades</h2>
      <ul>
        Un componente puede recibir propiedades de forma individual o todas las
        propiedades:
        <li>
          Individualmente:
          <ul>
            <li>
              En la función recibe ( | nombrePropiedad, nombrePropiedad2 | )
            </li>
            <li>Uso: | nombrePropiedad |</li>
          </ul>
        </li>
        <li>
          Todas las props:
          <ul>
            <li>En la función recibe ( props )</li>
            <li>Uso: | props.nombrePropiedad |</li>
          </ul>
        </li>
      </ul>
      <ul>
        Se pueden definir propiedades:
        <li>
          -En la llamada del componente: Strings van entre "", el resto entre
          corchetes
          <br />
          <b>
            &lt;Componente msg="Mensaje creado desde la app principal como
            propiedad."/&gt;
          </b>
        </li>
        <li>
          -Desde el propio componente definidas como propiedades por defecto:
          <br />
          <b>Propiedades.defaultProps = "String, object, list..."</b>
        </li>
      </ul>
      <h4>{props.porDefecto}</h4>
      <h4>{props.msg}</h4>
      <pre>{`
    *Todas las propiedades
            export default function Propiedades(props) { 
                return (
                    <h3>{props.porDefecto}</h3>
                    <h3>{props.msg}</h3>
                )
            }
            Propiedades.defaultProps = {
                porDefecto: "Propiedad por defecto"
            }

    *Individualmente
            export default function Propiedades( {msg, porDefecto}) { 
                return (
                    <h3>{porDefecto}</h3>
                    <h3>{msg}</h3>
                )
            }
            Propiedades.defaultProps = {
                porDefecto: "Propiedad por defecto"
            }
            `}</pre>
    </main>
  );
};

Propiedades.defaultProps = {
  porDefecto: "Propiedad por defecto",
};

export default Propiedades;
