import { useEffect } from "react";
import Photo from "../../assets/images/fotoPerfil.png";
import "./index.scss";

function Home({ id, menuActive, darkMode, setMenuActive }) {
  // FUNCTION //
  function openDirection(text) {
    window.open(text);
  }

  useEffect(() => {
    if (menuActive) {
      setMenuActive(false);
    }
  }, []);
  return (
    <section
      className={`home-principal-container ${
        menuActive === true ? "home-principal-container--active" : ""
      }`}
      id={id}
    >
      <div
        className={`media-container ${
          darkMode === true ? "" : "media-container--light"
        }`}
      >
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
      </div>
      <div
        className={`aboutMe-container ${
          darkMode === true ? "" : "aboutMe-container--light"
        }`}
      >
        <h1 className="title">¡Hola!, soy Ely :)</h1>
        <p className="animate__animated animate__fadeIn description">
          Gran apasionada por el desarrollo web, crear un proyecto desde sus
          principios y lograr algo extraordinario siempre me genera emoción y me
          empuja a buscar siempre diferentes e innovadoras formas de hacer lo
          que hago cada vez mejor. !Abierta completamente a nuevos
          conocimientos¡
        </p>
      </div>
      <div className="profile-container">
        <img className="profile-photo" src={Photo} alt="" />
        <h1 className={`role ${darkMode === true ? "" : "role--light"}`}>
          FRONTEND DEVELOPER{" "}
        </h1>
      </div>
    </section>
  );
}

export default Home;
