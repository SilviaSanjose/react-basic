import { createContext, useState } from "react";

const LanguageContext = createContext();

const translate = {
  es: {
    headerTitle: "Título en Ingles",
    headerText: "Este es un párrafo recogido como variable global del contexto",
    buttonLogin: "Iniciar sesión",
    buttonLogout: "cerrar Sesión",
    themeLight: "Tema claro",
    themeDark: "Tema oscuro",
  },
  en: {
    headerTitle: "English title",
    headerText:
      "This is a paragraph collected as a global variable of the context",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    themeLight: "Light Theme",
    themeDark: "Dark Theme",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState(translate[language]);

  const handleLanguage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setText(translate.es);
    } else {
      setLanguage("en");
      setText(translate.en);
    }
  };

  const data = { text, language, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};

export { LanguageProvider };
export default LanguageContext;
