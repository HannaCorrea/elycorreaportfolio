import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import Works from "./pages/works";
import { useState } from "react";
import AboutMe from "./pages/aboutMe/index";
import Footer from "./components/footer";

function App() {
  //STATES//
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`appDark ${darkMode === false ? "appDark--light" : ""}`}>
      <BrowserRouter>
        <NavBar
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                menuActive={menuActive}
                setMenuActive={setMenuActive}
                darkMode={darkMode}
              />
            }
          />
          <Route
            path="/about-me"
            element={
              <AboutMe
                setMenuActive={setMenuActive}
                menuActive={menuActive}
                darkMode={darkMode}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
