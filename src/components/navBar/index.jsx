import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect } from "react";

function NavBar({ menuActive, setMenuActive, darkMode, setDarkMode }) {
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
        <Link
          to={"/"}
          className={`logoEC-container ${
            darkMode === true ? "" : "logoEC-container--light"
          }`}
        >
          <span className="e">E</span>
          <span className="c">C</span>
        </Link>
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

          <li
            className={`nav-item ${darkMode === true ? "" : "nav-item--light"}`}
          >
            <Link to={"/about-me"}>Sobre mí</Link>
          </li>
          <li
            className={`nav-item ${darkMode === true ? "" : "nav-item--light"}`}
          >
            <Link to="/skills">Conocimientos</Link>
          </li>
          <li
            className={`nav-item ${darkMode === true ? "" : "nav-item--light"}`}
          >
            <Link to="proyects">Proyectos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
