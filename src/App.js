import React from "react" // no es necesario desde la versión 17
import logo from './logo.svg';
import ComponentF from "./components/Component";

import './App.css';

function App() {
  let name= "Silvi"
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
  return (
    <div className="App">
      <main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit src/App.js and save to reload!!
        </p>
      </header>

      <div>
        <label htmlFor="name">Nombre</label>
        <h3>{name==="Silvia" ? `Hola ${name}` : "¿No se tu nombre?"}</h3>
        <ul>
          {estaciones.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
      </div>
      <section>
        <ComponentF msg="Mensaje creado desde la app principal como propiedad."></ComponentF>
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
  );
}

export default App;
