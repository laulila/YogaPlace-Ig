import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";


function App() {

  const [dark, setDark] = useState(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });


  return (

    <div className={dark ? "dark" : ""}>

      <button
        onClick={() => setDark(!dark)}
        className="theme-btn"
        aria-label="Cambiar modo oscuro"
      >
        {dark ? "☀️" : "🌙"}
      </button>


      <Navbar />


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>


      <Footer />

      <WhatsAppButton />

    </div>

  );
}


export default App;