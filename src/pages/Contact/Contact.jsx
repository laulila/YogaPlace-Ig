import { useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });


  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }


  function handleSubmit(e) {
    e.preventDefault();

    const texto = `
Hola Laura 🌿
Quiero reservar una clase de yoga.

Nombre: ${form.nombre}

Email: ${form.email}

Consulta:
${form.mensaje}
    `;

    const url = `https://wa.me/5491157067354?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }


  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Reservá tu primera clase 🌿</h2>

        <p>
          Completá tus datos y te contacto por WhatsApp.
        </p>


        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />


          <textarea
            name="mensaje"
            placeholder="Contame qué buscás en yoga"
            value={form.mensaje}
            onChange={handleChange}
          />


          <button type="submit">
            Enviar por WhatsApp 💬
          </button>


        </form>

      </div>

    </section>
  );
}