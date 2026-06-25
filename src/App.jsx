import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <>
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
    </>
  );
}

export default App;