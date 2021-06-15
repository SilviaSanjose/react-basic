import Renderizado from "../components/Renderizado";

const Home = () => {
    let name= "Silvi"
    let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]

    let render = false;
  
    function changeRender (){ 
        console.log("pulsa")
        render= true;
    };
    return (
        
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
        <section>
            <h2>Renderizado</h2>
            <button onClick={changeRender}>Renderizar</button>
            {render ? <Renderizado />: "  Pulsa para renderizar el componente"}
        </section>
          
        </section>

        
      </main>
        
    )
}

export default Home
