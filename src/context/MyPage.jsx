import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import Header from "./Header";
import Main from "./Main";

const MyPage = () => {
  return (
    <>
      <div>
        Los contexto nos permiten crear y usar valores globales en todos los
        componentes que indiquemos, si pasar props de unos a otros. <br />
        Se crean usando <b>createContext();</b> y tienen que tener un proveedor
        (Provider) que es quién provee los datos a los componentes que están
        dentro de sus tag, y un consumidor que consume esos datos.
      </div>
      <br />
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <Main />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default MyPage;
