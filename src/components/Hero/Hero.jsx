import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <h1>
          Clases de Yoga Online con Laura
        </h1>

        <p>
          Movimiento, respiración y presencia
          para volver a vos 🌿
        </p>

        <Link 
          to="/contact" 
          className="hero-btn"
        >
          Reservar mi clase
        </Link>

      </div>

    </section>
  );
}