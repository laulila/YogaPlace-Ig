import { Link } from "react-router-dom";     
import { useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `
🧘 Reserva de clase Yoga

Nombre: ${form.nombre}

Email: ${form.email}

Mensaje: ${form.mensaje}
`;

    const url = `https://wa.me/5491157067354?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };


  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Reservá tu clase</h2>

        <p>
          Elegí un momento para conectar con tu práctica.
        </p>


        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />


          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
          />


          <textarea
            name="mensaje"
            placeholder="¿Qué te gustaría trabajar?"
            value={form.mensaje}
            onChange={handleChange}
            required
          />


          <button type="submit">
            Continuar a WhatsApp
          </button>
          <Link to="/" className="back-home">
  ← Volver al inicio
</Link>

        </form>

      </div>

    </section>
  );
}