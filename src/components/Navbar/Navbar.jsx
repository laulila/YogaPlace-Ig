import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Yoga con Laura 🌿
      </Link>


      <div className="nav-links">

        <Link to="/">
          Inicio
        </Link>

        <Link to="/contact">
          Contacto
        </Link>

        <a
          href="https://wa.me/5491157067354"
          target="_blank"
          rel="noreferrer"
          className="nav-btn"
        >
          Reservar clase
        </a>

      </div>

    </nav>
  );
}