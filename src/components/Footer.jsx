import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h3>Yoga con Laura 🌿</h3>

        <p>
          Clases de yoga online para conectar
          con tu cuerpo y tu bienestar.
        </p>


        <div className="footer-links">

          <a href="/">
            Inicio
          </a>

          <a href="/contact">
            Contacto
          </a>


          <a
            href="https://wa.me/5491157067354"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaWhatsapp /> WhatsApp
          </a>


          <a
            href="https://www.instagram.com/laura.l.pereyra"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaInstagram /> Instagram
          </a>

        </div>

      </div>


      <p className="footer-copy">
        © {new Date().getFullYear()} Yoga con Laura. Todos los derechos reservados.
      </p>

    </footer>
  );
}