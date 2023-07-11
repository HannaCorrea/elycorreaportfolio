import { Link } from "react-router-dom";
import "./index.scss";

function Footer() {
  function openDirection(text) {
    window.open(text);
  }

  function openEmail() {
    window.open("mailto:hannagonz1997@gmail.com");
  }

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer-principal-container">
      <button onClick={() => goTop()} className="circle">
        <i class="fas fa-chevron-up"></i>
      </button>
      <div className="menu-container">
        <Link className="menu-item" to={"/about-me"}>
          Sobre mí
        </Link>
        <Link className="menu-item" to={"/skills"}>
          Conocimientos
        </Link>
        <Link className="menu-item" to={"/proyects"}>
          Proyectos
        </Link>
      </div>
      <div className="media-container">
        <button
          onClick={() =>
            openDirection("https://www.linkedin.com/in/ely-correa-81277726b/")
          }
        >
          <i className="fab fa-linkedin-in in"></i>
        </button>
        <button
          className="git-butt"
          onClick={() => openDirection("https://github.com/HannaCorrea")}
        >
          <i className="fab fa-github git"></i>
        </button>
        <button onClick={() => openEmail()}>
          <i class="fas fa-envelope"></i>
        </button>
      </div>
      <p className="email">hannagonz1997@gmail.com</p>
    </footer>
  );
}

export default Footer;
