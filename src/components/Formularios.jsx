import { useState } from "react";

const Formularios = () => {
  //formularios
  const [name, setName] = useState("");
  const handlerName = (e) => {
    //ejemplo al cambiar input, el resto se hace en el mismo input
    setName(e.target.value);
  };
  const [sabor, setSabor] = useState("");
  const [lenguage, setlenguage] = useState("");
  const [terms, setTerms] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${name} 
    Seleccionado ${sabor} y ${lenguage}
    Condiciones: ${terms}`);
  };
  //formulario 2
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    alert(`Nombre: ${form.nom} 
    Apellido: ${form.apell} 
    Condiciones: ${form.terminos}`);
  };
  return (
    <>
      <h2>Formularios</h2>
      {/*formulario recogiendo datos por separado*/}
      <div>
        Para ser controlados, la tag form no debe llevar método, si no un{" "}
        <b>onSubmit </b> que desactive la funcionalidad por defecto del submit.
      </div>
      <code>
        <pre>{`
        const handleSubmit = (e) => {
            e.preventDefault();
          };
          
        <form onSubmit={handleSubmit}></form>`}</pre>{" "}
      </code>
      <p>Formulario recogiendo los datos individualmente.</p>
      <div className="d-flex">
        <form className="home-form" onSubmit={handleSubmit}>
          <label htmlFor={"nombre"} className="mr-2">
            Nombre:{" "}
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={name}
            onChange={handlerName}
          />
          <br />
          <label className="mr-2">Seleccionado "{sabor}". Cambiar: </label>
          <label className="mr-2">Vanilla</label>
          <input
            type="radio"
            name="sabor"
            value="vanilla"
            onChange={(e) => setSabor(e.target.value)}
          />
          <label className="m-2">React</label>
          <input
            type="radio"
            name="sabor"
            value="react"
            onChange={(e) => setSabor(e.target.value)}
            defaultChecked
          />
          <br />
          <label className="mr-2">Seleccionado "{lenguage}":</label>
          <select
            name="lenguaje"
            selected
            onChange={(e) => setlenguage(e.target.value)}
            defaultValue="ninguno"
          >
            <option value="ninguno">Selecciona</option>
            <option value="js">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <br />
          <label className="mr-2">Acepto</label>
          <input
            type="checkbox"
            name="terminos"
            onChange={(e) => setTerms(e.target.checked)}
          />
          {terms ? " Aceptado" : " Rechazado"}
          <br />
          <input type="submit" value="Enviar" />
        </form>
        <div>
          Cada input debe llevar su <b>onChange</b> que llama a una función por
          cada campo que añade al estado el valor del input. Tantas funciones y
          <b> setState </b>como campos tenga el formulario.
          <ul>
            <li>
              Input radio, select, text, textare...Se recoge el value:
              <br />
              <code>onChange=|(e) =&gt; setSabor(e.target.value)|</code>
            </li>
            <li>
              Checkbox se recoge el checked: <br />
              <code>onChange=|(e) =&gt; setTerms(e.target.checked)|</code>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <p>Formulario recogiendo los datos en grupo.</p>
      <p>
        En este caso, todos los campos del formulario llaman a la misma función.
        Sólo se separan en funciones distintas los campos que recogen un valor y
        los checkox que recogen el checked
      </p>
      <div className="d-flex">
        <div>
          <form onSubmit={handleSubmit2} className="form">
            <input type="text" name="nom" onChange={handleChange} />
            <br />
            <input
              type="text"
              id="apellido"
              name="apell"
              onChange={handleChange}
            />
            <br />
            <label className="mr-2">Acepto:</label>
            <input type="checkbox" name="terminos" onChange={handleChecked} />
            <br />
            <input type="submit" value="Enviar" />
          </form>
          <ul>
            <li>
              text, select, ect.. <code> onChange=|handleChange|</code>
            </li>
            <li>
              checkbox: <code> onChange=|handleChecked|</code>
            </li>
          </ul>
        </div>
        <pre>{`
            const handleChange = (e) => { 
                setForm({
                     ...form, [e.target.name]:e.target.value 
                }); }; 
            const handleChecked = (e) => { 
                setForm({
                     ...form, 
                     [e.target.name]: e.target.checked
                }); };
            `}</pre>
      </div>
    </>
  );
};

export default Formularios;
