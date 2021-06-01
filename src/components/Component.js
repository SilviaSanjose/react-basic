import React, { Component } from "react";


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
            <p>Tiene que tener la importación de component de React <b>import React, | Component | from "react";</b> y la exportación para llamarlo desde la App principal.</p>
            <p>Debe devolver un return con el código JSX</p>
            <h3>{props.msg} Añado desde el propio componentem que para usar una propiedad definida en la App principal, en el componente funcional se tiene que pasar el
            parámetro.</h3>
        </div>
    )
}
export default ComponentF;

