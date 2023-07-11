import { useEffect, useState } from "react";
import AOS from "aos";
import Video from "../../assets/videos/videoa.mp4";
import "aos/dist/aos.css";
import "./index.scss";

function AboutMe({ menuActive, setMenuActive }) {
  const [scrollPosition, setScrollPosition] = useState();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.onscroll = function scroll() {
    var y = window.scrollY;
    setScrollPosition(y);
    console.log(y);
  };

  function handleWindowResize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (menuActive) {
      setMenuActive(false);
    }
    AOS.init();
  }, []);

  return (
    <section
      className={`aboutMe-principal-container ${
        menuActive === true ? "aboutMe-principal-container--menuActive" : ""
      }`}
    >
      <h1 className="title">Acerca de mí...</h1>
      <div className="aboutMe-content">
        <div className="as-developer">
          <h2 className="sub-dev">Yo, como desarrolladora </h2>
          <p className="dev-description">
            Empecé a estudiar desarrollo web hace 3 años, aprendí de manera
            autónoma y con el acompañamiento de un desarrollador senior. Cuando
            descrubrí todo lo que se podía crear con la programación quedé
            fascinada con la misma. Empecé a crear proyectos propios con el fin
            de aplicar mis conocimientos adquiridos e investigar por más de
            ellos, que me ayudaran a tener un código limpio, óptimo y creativo.
          </p>
        </div>
        <div className="as-developer second">
          <p className="dev-description">
            Como desarrolladora he implementado patrones de seguimiento en mi
            trabajo, investigación, prueba de ensayo y error, organización y
            estimaciones detalladas, trabajo en equipo y comunicación acertiva.
            Personalmente adoro el trabajo con CSS, SCSS y todo lo que son
            animaciones. Creo que cada desarrollador tiene una parte favorita de
            lo que hace, esta es la mía :)
          </p>
        </div>

        <div className="photos-principal-container">
          <div className="animate__animated animate__fadeIn description1"></div>
          <div className="animate__animated animate__fadeIn description2"></div>
          <div className="animate__animated animate__fadeIn description3"></div>
        </div>
        <div className="as-person">
          <h2 className="sub-person">Ely como Ely... </h2>
          <p className="person-description">
            Resulta que si no me callas no paro de hablar. Soy expontánea,
            social y creativa. Normalmente siempre tengo una chispa de locura
            que si la miras bien no es tan extraña :). Me gusta reirme y
            disfrutar de lo que hago. Adoro hacer amigos y trabajar en lo que
            soy cada día. Aprender siempre es un placer para mi, darme por
            vencida no es una opción.
          </p>
        </div>
        <div className="as-person secondPerson">
          <h2 className="sub-person">Curiosidades... </h2>
          <p className="person-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            porro inventore expedita exercitationem magni beatae repellat
            voluptates quod quasi aperiam tempora facilis et, quia sint fuga
            qui. Autem, eos harum.
          </p>
        </div>
      </div>
      <section className="skills-principal-container">
        <h1>Habilidades</h1>
        {scrollPosition >= "220" && windowSize < "1023" && (
          <>
            <ul
              data-aos="flip-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="600"
              id="box"
              className="skills-items-container"
            >
              <li className="skill-item html">
                <span className="spanHtml">
                  HTML <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item css">
                <span className="spanCss">
                  CSS / SCSS <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item javascript">
                <span className="spanJs">
                  JAVASCRIPT <p className="color">60%</p>
                </span>
              </li>
              <li className="skill-item react">
                <span className="spanReact">
                  REACT <p className="color">70%</p>
                </span>
              </li>
              <li className="skill-item html">
                <span className="spanJira">
                  JIRA <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item html">
                <span className="spanBbk">
                  BITBUCKET <p className="color">90%</p>
                </span>
              </li>
            </ul>
            {scrollPosition >= "250" && windowSize <= "1023" && (
              <div className="developer-girl-container">
                <img
                  data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="10"
                  data-aos-duration="3000"
                  className="girldev"
                  src={
                    "https://media.giphy.com/media/ZiUGv5qGxfPZ0x3B6j/giphy.gif"
                  }
                  alt=""
                />

                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="1000"
                  data-aos-duration="900"
                  className="jsdev"
                  src={
                    "https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
                  }
                  alt=""
                />

                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="1000"
                  data-aos-duration="900"
                  className="reactdev"
                  src={
                    "https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="2000"
                  data-aos-duration="4000"
                  className="htmldev"
                  src={
                    "https://media.giphy.com/media/lRNinuXDDLgR7Oe8LY/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="2000"
                  data-aos-duration="1500"
                  className="cssdev"
                  src={
                    "https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="3000"
                  data-aos-duration="800"
                  className="gitdev"
                  src={
                    "https://media.giphy.com/media/KzJkzjggfGN5Py6nkT/giphy.gif"
                  }
                  alt=""
                />
              </div>
            )}
          </>
        )}
        {scrollPosition >= "300" && windowSize >= "1023" && (
          <>
            <ul
              data-aos="flip-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="600"
              id="box"
              className="skills-items-container"
            >
              <li className="skill-item html">
                <span className="spanHtml">
                  HTML <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item css">
                <span className="spanCss">
                  CSS / SCSS <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item javascript">
                <span className="spanJs">
                  JAVASCRIPT <p className="color">60%</p>
                </span>
              </li>
              <li className="skill-item react">
                <span className="spanReact">
                  REACT <p className="color">70%</p>
                </span>
              </li>
              <li className="skill-item html">
                <span className="spanJira">
                  JIRA <p className="color">90%</p>
                </span>
              </li>
              <li className="skill-item html">
                <span className="spanBbk">
                  BITBUCKET <p className="color">90%</p>
                </span>
              </li>
            </ul>
            {scrollPosition >= "200" && windowSize >= "1023" && (
              <div className="developer-girl-container">
                <img
                  data-aos="zoom-in"
                  data-aos-offset="50"
                  data-aos-delay="10"
                  data-aos-duration="3000"
                  className="girldev"
                  src={
                    "https://media.giphy.com/media/ZiUGv5qGxfPZ0x3B6j/giphy.gif"
                  }
                  alt=""
                />

                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="1000"
                  data-aos-duration="900"
                  className="jsdev"
                  src={
                    "https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
                  }
                  alt=""
                />

                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="1000"
                  data-aos-duration="900"
                  className="reactdev"
                  src={
                    "https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="2000"
                  data-aos-duration="4000"
                  className="htmldev"
                  src={
                    "https://media.giphy.com/media/lRNinuXDDLgR7Oe8LY/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="2000"
                  data-aos-duration="1500"
                  className="cssdev"
                  src={
                    "https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif"
                  }
                  alt=""
                />
                <img
                  data-aos="zoom-in"
                  data-aos-offset="-3000"
                  data-aos-delay="3000"
                  data-aos-duration="800"
                  className="gitdev"
                  src={
                    "https://media.giphy.com/media/KzJkzjggfGN5Py6nkT/giphy.gif"
                  }
                  alt=""
                />
              </div>
            )}
          </>
        )}
      </section>

      <div className="my-history-container" data-aos="fade-right">
        <h2 className="history-title">Mi historia</h2>
        <p className="description">
          Resulta que ésta no es mi primera opción de carrera. En cuanto salí de
          bachiller hice una tecnología de gestion hotelera y turística, trabajé
          dos años y medio en hoteles, por lo cual tengo una muy buena
          experiencia con servicio al cliente. En medio de ello descubrí que
          quería algo más, que sintiera que crecía cada día y aprender todo el
          tiempo en lo que haga, y la hoteleria no me brindaba mucho crecimiento
          como yo lo deseaba. Es allí donde me mostraron la programación y el
          desarrollo web, y por supuesto ¡Lo amé!. Empecé desde lo más básico, y
          mientras avanzaba descubría muchos más conocimientos y formas de
          hacerlo, me colmó y llenó completamente poder crear cosas tan
          extraordinarias y darme cuenta que, ¡Era yo trás banbalinas!.
        </p>

        <p>
          La programación me hizo sentir tan felíz con lo que hacía que cada vez
          quería aprender más y más, dándome ese crecimiento cada día que tanto
          anhelaba.
        </p>
        <p>
          Empecé a tener cursos de todo un poco, con el acompañamiento de un
          desarrollador senior que siempre me mostraba el camino a seguir y las
          infinitas posibilidades, empujándome a buscar siempre más.
        </p>
        <p>
          Comencé a realizar y construir proyectos de prueba para ponerme retos
          de trabajo, y a medida que lo hacía mejoraba cada vez más. Creo que mi
          parte favorita del desarrollo web es que, ¡nunca dejas de aprender!, y
          eso es de lo mejor que se puede tener, hacerte un poquito mejor cada
          día
        </p>
        <p>
          Y bueno, aqui estoy, con toda la proyección de hacer de mi vida el
          mejor proyecto por medio del desarrollo web.
        </p>
      </div>

      {/* <div data-aos="fade-down" className="things">
        <h2>Top diez curiosidades sobre mí</h2>
        <ul>
          <li>Me encanta el cine de terro.r</li>
          <li>No me gustan una gran mayoria de frutas.</li>
          <li>Leo mucha literatura romántica y fantástica.</li>
          <li>No tolero que me toquen los pies, nisiquiera yo misma:)</li>
          <li>Amo la temática zombie en general</li>
          <li>Estoy escribiendo un libro.</li>
          <li>Disfruto probar cerveza de diferentes partes.</li>
          <li>Me gustaria vivir en Los Ángeles.</li>
          <li>Bérlin es mi ciudad favorita.</li>
          <li>Tengo el mismo tatto con mi mejor amiga.</li>
        </ul>
      </div> */}
    </section>
  );
}

export default AboutMe;
