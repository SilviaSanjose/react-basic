import Renderizado from "../components/Renderizado";
import { useState } from "react";
import Formularios from "../components/Formularios";

const Home = () => {
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

  //renderizado
  const [render, changeRender] = useState(false);
  const ocultar = () => changeRender(false);

  return (
    <main>
      <div>
        <p>
          Para recorrer arrays, se usa el método <b>.map()</b>:{" "}
        </p>
        <div className="d-flex justify-content-around">
          <ul>
            {estaciones.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <pre className="pr-4">{`
            let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
            <ul>
            {estaciones.map((el, index) => <li key={index}>{el}</li>)}
            </ul>
                    `}</pre>
        </div>
      </div>
      <section>
        <h2>Renderizado</h2>
        <p>
          Se va a mostrar un componente sólo si la variable <b>render</b> es
          true. Para poder renderizar un componente según haya cambios se
          necesita controlar su estado, con el Hook <b>useSate()</b> el cual
          debe recibir un valor inicial, y ha de instanciarse con
          destructuración de arreglos con dos elementos: estado inicial y método
          para cambiarlo:{" "}
        </p>
        <button onClick={() => changeRender(true)}>Renderizar</button>
        <button onClick={ocultar}>Ocultar</button>
        {render ? <Renderizado /> : "  Pulsa para renderizar el componente"}
        <pre className="my-2">{`
            import { useState } from "react";
            const [render, changeRender] =  useState(false);
            const ocultar =()=> changeRender(false);

            <button onClick={()=> changeRender(true)}>Renderizar</button>
            <button onClick={ocultar}>Ocultar</button>
            {render ? <Renderizado />: "  Pulsa para renderizar el componente"}
            
            `}</pre>
      </section>
      <br />
      <section>
        <Formularios />
      </section>
    </main>
  );
};

export default Home;
