import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay">

        <h1>Yoga con Laura</h1>

        <p>
          Movimiento, respiración y presencia
          para volver a vos 🌿
        </p>

        <Link to="/contact" className="hero-btn">
          Reservar mi clase
        </Link>

      </div>
    </header>
  );
}