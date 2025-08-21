import logo from '../assets/logo.png'
import logoLight from '../assets/logo_light.png'
import sunIcon from '../assets/sun_icon.svg'
import moonIcon from '../assets/moon_icon.svg'

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header = ({ theme, setTheme } : HeaderProps) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="header">
      <img
        src={theme === "dark" ? logoLight : logo} alt="App Logo" />

      <button className="theme-toggle" onClick={toggleTheme}>
        <img
          src={theme === "dark" ? sunIcon : moonIcon} alt="Theme Toggle" className="theme-icon" />
      </button>
    </header>
  );
};

export default Header;

