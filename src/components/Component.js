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

//Código arrow function
//const ComponentClass = props => <h3>{props.msg} </h3>
    

function ComponentF(props) {
    return (
        <div>
            <h2>Componente funcional</h2>
            <p>Tiene que tener la importación de component de React <b>import React, | Component | from "react";</b> y la exportación para llamarlo desde la App principal.
            Debe devolver un return con el código JSX.
            Desde la app principal se llama a este componente; se pueden definir propiedades en la llamada del componente, para ello se tiene que indicar el argumento con
            <b> props.nombrePropiedad</b> </p>
            <h4>{props.msg} </h4>
            <pre>{`
            Component.js
            import React, { Component } from "react";

            function ComponentF(props) {
                return (
                    <div>  Mi código Html   </div>
                    <h4>{props.msg} </h4>
                )
            }
            export default ComponentF;
            `}</pre>
            
            <pre>{`
            App.js
            import ComponentF from "./components/Component";

            <ComponentF msg="Mensaje creado desde la app principal como propiedad."></ComponentF>
            `}</pre>
            
        </div>
    )
}
export default ComponentF;

