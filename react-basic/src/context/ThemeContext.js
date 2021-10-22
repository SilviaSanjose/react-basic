import { createContext, useState } from "react";

//contexto para cambiar de tema
const ThemeContext = createContext();

const initialTheme = "light";

//proveedor-Provider; que recibe siempre la propiedad children, que indic que al llamar al contexto,
//va a afectar o dar permiso a todos los children que tenga dentro
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  //dada recogera todos los valores que se van a compartir
  const data = { theme, handleTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
