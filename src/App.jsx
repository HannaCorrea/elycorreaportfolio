// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import Works from "./pages/works";
import { useState } from "react";

function App() {
  //STATES//
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`appDark ${darkMode === false ? "appDark--light" : ""}`}>
      <NavBar
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {/* <Works id="section1" /> */}
      <Home menuActive={menuActive} darkMode={darkMode} id="section2" />
    </div>
  );
}

export default App;
