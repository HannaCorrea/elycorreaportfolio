import { Link, animateScroll as scroll } from "react-scroll";
import "./index.scss";

function NavBar({ menuActive, setMenuActive, darkMode, setDarkMode }) {
  const menuItems = [
    {
      name: "Sobre mi",
    },
    {
      name: "Conocimientos",
    },
    {
      name: "Proyectos",
    },
  ];
  //FUNCTIONS//
  function handleMenu() {
    setMenuActive(!menuActive);
  }

  function openEmail() {
    window.open("mailto:hannagonz1997@gmail.com");
  }
  function handleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <nav className="nav-principal-container" id="navbar">
      <div className="nav-content">
        <button
          onClick={() => handleMenu()}
          className={`plus-button ${
            darkMode === true ? "" : "plus-button--light"
          }`}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          onClick={() => handleTheme()}
          className="theme-button-container"
        >
          {darkMode ? (
            <i className="fa-solid fa-sun sun"></i>
          ) : (
            <i className="fa-solid fa-moon moon"></i>
          )}
        </button>

        <ul
          className={`nav-items ${
            menuActive === true ? "nav-items--active" : ""
          }`}
        >
          <button
            onClick={() => openEmail()}
            className={`email-button-container ${
              darkMode === true ? "" : "email-button-container--light"
            }`}
          >
            <i className="fas fa-envelope"></i>
            <p className="email-text">hannagonz1997@gmail.com</p>
          </button>
          {menuItems?.length > 0 &&
            menuItems.map((item, i) => (
              <li
                key={i}
                className={`nav-item ${
                  darkMode === true ? "" : "nav-item--light"
                }`}
              >
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  horizontal={true}
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
