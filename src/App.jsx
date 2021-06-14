import React from "react" // no es necesario desde la versión 17
import logo from './logo.svg';
import ComponentF from "./components/Component";

import './App.css';
import Propiedades from "./components/Propiedades";
import Renderizado from "./components/Renderizado";

function App() {
  let name= "Silvi"
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]

  let render = false;
  
  function changeRender (){ 
    console.log("pulsa")
    render= true;
  };

  return (
    <>
    <div className="App"> 
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload!!
        </p>
      </header>
      <main>
        <div>
          <label htmlFor="name">{name}</label>
          <h3>{name==="Silvia" ? `Hola ${name}` : "Estoy entrando en el else"}</h3>
          <ul>
            {estaciones.map((el, index) => <li key={index}>{el}</li>)}
          </ul>
          <pre>{`
          let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
          <ul>
            {estaciones.map((el, index) => <li key={index}>{el}</li>)}
          </ul>

          `}</pre>
        </div>
        <section>
          <ComponentF></ComponentF>
        </section> 
        <section>
          <Propiedades msg="Mensaje creado desde la app principal como propiedad."></Propiedades>
        </section>
        <section>
          <h2>Renderizado</h2>
          <button onClick={changeRender}>Renderizar</button>
          {render ? <Renderizado />: "  Pulsa para renderizar el componente"}
          
        </section>

        
      </main>
      
      <footer className="footer">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
    </>
  );
}

export default App;
