import Hero from "../../components/Hero/Hero";
import About from "../../components/About";
import Cards from "../../components/Cards";

import { FaSpa, FaLeaf, FaBrain } from "react-icons/fa";

import "./Home.css";


function Home() {
  return (
    <div className="home">

      <Hero />

      <About />

      <Cards />


      <section className="benefits">

        <h2>¿Qué vas a lograr?</h2>


        <div className="benefits-grid">


          <article className="benefit-card">

            <FaSpa className="icon" />

            <h3>
              Relajación profunda
            </h3>

            <p>
              Reducí el estrés y liberá tensiones del cuerpo.
            </p>

          </article>



          <article className="benefit-card">

            <FaLeaf className="icon" />

            <h3>
              Más flexibilidad
            </h3>

            <p>
              Mejorá tu movilidad y conexión corporal.
            </p>

          </article>



          <article className="benefit-card">

            <FaBrain className="icon" />

            <h3>
              Claridad mental
            </h3>

            <p>
              Calmá la mente y enfocá tu energía.
            </p>

          </article>


        </div>

      </section>


    </div>
  );
}


export default Home;