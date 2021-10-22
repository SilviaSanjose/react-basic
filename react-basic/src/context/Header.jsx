import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);

  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <p>{text.headerText}</p>

      <select name="language" onChange={handleLanguage}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <button>
        {text.buttonLogin}
        {/* onClick={handleAuth}  / {auth ? texts.buttonLogout : texts.buttonLogin} */}
      </button>
    </header>
  );
};

export default Header;
