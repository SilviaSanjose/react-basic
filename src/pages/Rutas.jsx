import {
  useHistory,
  useLocation,
  useParams,
  Link,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import RutaAnidada from "../components/RutaAnidada";

const Rutas = () => {
  let { routeename } = useParams();
  let { id } = useParams();

  let { search } = useLocation();
  let query = new URLSearchParams(search);
  const LIMIT = 5;
  let start = parseInt(query.get("start")) || 1;
  let end = parseInt(query.get("end")) || LIMIT;

  let history = useHistory();
  const prev = (e) => {
    history.push({ search: `?start=${start - LIMIT}&end=${end - LIMIT}` });
  };
  const next = (e) => {
    history.push({ search: `?start=${start + LIMIT}&end=${end + LIMIT}` });
  };

  let { path, url } = useRouteMatch();

  return (
    <main>
      <h3>Hooks de React Routers</h3>
      <ul>
        <li>
          <b>useParams();</b> Devuelve un objeto clave:valor con los parámetros
          pasados en la URL vía www.url/param . <br />
          Se declaran con <b>/:parametro</b> por cada parámetro. Y se recogen
          con useParams() por el nombre del mismo:
          <br />
          Objeto useParams() = | routeename: "ruta1", id: "3"|
          <div>parámetro1 = {routeename}</div>
          <div>parámetro2 = {id}</div>
          <pre>{`
          <Link exact to="/rutas/ruta1/3">Rutas</Link>
          <Route exact path="/rutas/:routeename/:id" component={Rutas} />
          ------------------------
          let { routeename } = useParams();
          let { id } = useParams();
          return (
            <div>
              <p>Ruta: {routeename}</p>
              <p>Id: {id}</p>
            </div>
          )
          `}</pre>
        </li>
        <li>
          <b>useLocation();</b> Devuelve un objeto location, cuando la url se
          pasa <b>www.url?para1=ee&param2=gg</b>, con los datos de la url, entre
          ellos "search" que son los parámetros. <br />
          Para poder recoger los valores de search y desestructurarlos se puede
          serializar con <b>URLSearchParams();</b> y obteniendo sus valores con
          .get("nombre clave"); <br />
          <div>
            Parámetro 1: {start} y Parámetro 2: {end}
          </div>
          <pre>{`
    Algunas claves del Objeto useLocation = { pathname: la url base sin parámetros 
                                              search: parámetros("?star=1&end=3") } `}</pre>
          <pre>{`
            <Route exact path="/rutas/" component={Rutas} />
            ---------------------------
            let { search } = useLocation();
            let query = new URLSearchParams(search);
            let start = query.get("start");
            let end = query.get("end");
            return (
                <div> Parámetro 1: {start} y Parámetro 2: {end}  </div>
            )
    `}</pre>
        </li>
        <li>
          <b>useHistory();</b>Da un acceso al historial de la instancia. Genera
          un objeto con un parámetro location igual que useLocation() con su
          search. <br />
          El método .push() nos deja añadir a la clave search los parámetros.
          <br />
          {start > LIMIT && <button onClick={prev}>Atrás</button>}
          <button onClick={next}>Siguiente</button>
          <pre>{`
          const LIMIT = 5;
          let start = parseInt(query.get("start")) || 1;     //añado valor por defecto
          let end = parseInt(query.get("end")) || LIMIT;     //añado valor por defecto
          let history = useHistory();
        
          const prev = (e) => {
            history.push({ search: ?start=$|start - LIMIT|&end=$|end - LIMIT| });
          };
          const next = (e) => {
            history.push({ search: ?start=$|start + LIMIT|&end$|end + LIMIT| });
          };

          {start > LIMIT && <button onClick={prev}>Atrás</button>}
          <button onClick={next}>Siguiente</button>
          `}</pre>
        </li>
        <li>
          <b>useRouteMatch();</b> devuelve un objeto con parámetros como path
          (es la ruta tal como figura en Router "/rutas/:routeename/:id") y url
          (ruta real "/rutas/1/5")
          <div>
            Las rutas anidadas no hace falta que lleven la tag BrowserRouter, ya
            que al estar dentro de la propia ruta padre ya lo tienen. Pero se
            tiene que definir el Link y el Switch con las Routes
          </div>
          <ul>
            <li>
              <Link exact to={`${url}/anidada1`}>
                Anidada1
              </Link>
            </li>
            <li>
              <Link exact to={`${url}/anidada2`}>
                Anidada2
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path={`${path}/:anidada`} component={RutaAnidada}></Route>
          </Switch>
        </li>
      </ul>
      <pre>{`
        <li>
          <Link exact to={$|url|/anidada1}>Anidada1</Link>
        </li>
        <li>
        <Link exact to={$|url|/anidada2}>Anidada2</Link>
        </li>
      
      <Switch>
        <Route exact path={path}></Route>
        <Route path={$|path|/:anidada} component={RutaAnidada}></Route>
      </Switch>

    RutaAnidada.jsx
        const RutaAnidada = () => {
            let { anidada } = useParams();
            return (
              <div>
                <div>
                  Recargo el componente de la ruta: <b>{anidada}</b>
                </div>
                {anidada === "anidada1" ? <div>111111111</div> : <div>22222222</div>}
              </div>
            );
        };
  
      `}</pre>

      <h4>Redirect simple:</h4>
      <p>Se usa cuando quieres redirigir una ruta a otra Ruta</p>
      <div>
        Al invocar la ruta www.url/rutaRedirigir te lleva a www.url/componentes.
      </div>
      <pre>{`
      <Link exact to="/componentes">Componentes</Link>
      <Link exact to="/rutaRedirigir">Redirigir</Link>

      <Route exact path="/rutaRedirigir">
          <Redirect to="/componentes" />
      </Route>
      `}</pre>
    </main>
  );
};

export default Rutas;
