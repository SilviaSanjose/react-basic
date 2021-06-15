import React from "react" // no es necesario desde la versión 17
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch, NavLink } from "react-router-dom";
import ComponentF from "./pages/Component";
import Propiedades from "./pages/Propiedades";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

function App() {

  return (
    <>
    <div className="App"> 
      
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <Link exact to="/componentes">Componentes</Link>
            <Link exac to="/propiedades">Propiedades</Link>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/componentes" component={ComponentF} />
          <Route exact path="/propiedades" children={<Propiedades/>}></Route>

          <Route path="*" component={Error404} /> 
        </Switch>
      </Router>
        
      
      <section>
          <Propiedades msg="Mensaje creado desde la app principal como propiedad."></Propiedades>
        </section>
      
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
