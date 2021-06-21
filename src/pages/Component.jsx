//import React, { Component } from "react";  //Para la clase

/* class ComponentClass extends Component {
    render () {
        return (
        <div>
            <h2>Componente de clase: Esta cada vez más en desuso</h2>
            <p>Tiene que tener la importación de component de React <b>import React, | Component | from "react";</b> y la exportación para llamarlo desde la App principal.</p>
            <p>Un componente de clase debe tener su método render que renderiza el código JSX</p>
            <h3>{this.props.msg}</h3>
        </div>
        )
    }
} */

function ComponentF() {
  let myStyle = {
    color: "blue",
  };
  return (
    <main>
      <h2>Componente funcional</h2>
      <p>
        Debe tener export para llamarlo desde la App principal: puede ser desde
        la propia función, o al final de la misma, según donde vaya se llama en
        la App principal de una manera u otra Debe devolver un return con el
        código JSX. Desde la app principal se llama a este componente, que se ha
        de importar(según el método)
      </p>

      <pre className="component-pre">{`
         Component.jsx
            
            function ComponentF() {
                return (
                    <div>  Mi código Html   </div>
                    
                )
            }
            export default ComponentF;

            export function ComponentF() {
                return (
                    <div>  Mi código Html   </div>
            
                )
            }
            `}</pre>

      <pre>{`
        App.jsx
            import ComponentF from "./components/Component";
            import { ComponentF } from "./components/Component";

            <ComponentF></ComponentF>

            `}</pre>

      <p>
        Es recomendable en los componentes que van a ir cambiando, por ejemplo
        al ir cargando más datos, que lleven estado: esto es que cada vez que lo
        que guardemos en el estado cambie, se vuelve a renderizar el componente.
        Se usa añadiendo <b>import React, |useState | from "react"</b> al import
        de React. Y en el componente,
      </p>
      <h2 style={myStyle}>Mi Estilo definido en el componente</h2>
    </main>
  );
}
export default ComponentF;
