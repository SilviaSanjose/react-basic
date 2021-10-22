import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
import LanguageContext from "./LanguageContext";
import ThemeContext from "./ThemeContext";

const Main = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  // const { auth } = useContext(AuthContext);

  return (
    <div className={`mt-4 ${theme}`}>
      {/* //   {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
    //   <p>{texts.mainContent}</p> */}
      <p>
        *Desde el componente main, uso el contexto para cambiar el tema de la
        página y hacer uso del valor. Header usara el valor del contexto también
        pero sólo de lectura.
      </p>
      Header: <code> const |theme| = useContext(ThemeContext);</code> <br />
      Main: <code> const |theme, handleTheme| = useContext(ThemeContext);</code>
      <br />
      <code>input onClick=|handleTheme|</code>
      <br />
      <input
        type="radio"
        className="mx-3"
        name="theme"
        id="light-context"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light-context">{text.themeLight}</label>
      <input
        type="radio"
        className="mx-3"
        name="theme"
        id="dark-context"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark-context">{text.themeDark}</label>
      <p>
        El contexto lleva la prop |children| y al definir el provider se le
        indica que afectara a todos los Children (los componentes que este
        dentro de las tags)
      </p>
      <pre>{`
      const ThemeContext = createContext();   //context 

      const initialTheme = "light";

      //crear provider
      const ThemeProvider = ({ children }) => {
        const [theme, setTheme] = useState(initialTheme);
      
        const handleTheme = (e) => {
          if (e.target.value === "light") {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        };
      
        const data = { theme, handleTheme };  //recoge los valores a comparir y llama al contexto indicando que es el Provider
        return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
      };
      
      export { ThemeProvider };
      export default ThemeContext;
      `}</pre>
    </div>
  );
};

export default Main;
