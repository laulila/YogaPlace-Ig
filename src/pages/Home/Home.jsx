import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <About />
      <Cards />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default Home;




